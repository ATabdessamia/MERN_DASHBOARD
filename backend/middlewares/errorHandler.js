const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404).json({ status: "Error" });
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    status: "Error",
    data: {
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    },
  });
};

export { notFound, errorHandler };
