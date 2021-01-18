import jwt from "jsonwebtoken";
import { promisify } from "util";
import catchAsync from "express-async-handler";
import Admin from "../models/adminModels.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const createSendToken = (admin, statusCode, res) => {
  const token = signToken(admin._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  admin.password = undefined;

  res.status(statusCode).json({
    status: "success",
    data: {
      token,
      admin,
    },
  });
};

const signup = catchAsync(async (req, res) => {
  const newAdmin = await Admin.create({
    admin: req.body.admin,
    password: req.body.password,
  });

  createSendToken(newAdmin, 201, res);
});

const login = catchAsync(async (req, res) => {
  const { admin, password } = req.body;

  if (!admin || !password) throw Error("Please provide your admin or password");

  const aDmin = await Admin.findOne({ admin }).select("+password");

  if (!aDmin || !(await aDmin.correctPassword(password, aDmin.password)))
    throw Error("Incorrect admin or password");

  createSendToken(aDmin, 200, res);
});

const logOut = (req, res) => {
  const cookieOptions = {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  };

  res.cookie("jwt", "loggOut", cookieOptions);
  res.status(200).json({
    status: "success",
  });
};

const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    throw Error("Access denied, Please make sure you are logged in ");
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentAdmin = await Admin.findById(decoded.id);

  if (!currentAdmin) {
    throw Error("Admin token expired");
  }

  req.admin = currentAdmin;
  res.locals.admin = currentAdmin;
  next();
});

const isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const currentAdmin = await Admin.findById(decoded.id);

      if (!currentAdmin) {
        return next();
      }

      res.locals.admin = currentAdmin;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

export { isLoggedIn, logOut, login, signup, protect };
