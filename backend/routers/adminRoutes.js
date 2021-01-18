import express from "express";

import { signup, login, logOut } from "../controllers/adminControllers.js";

const adminRouter = express.Router();

adminRouter.route("/").post(login);
adminRouter.route("/signup").post(signup);
adminRouter.route("/logout").get(logOut);

export default adminRouter;
