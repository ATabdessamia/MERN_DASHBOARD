import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookie from "cookie-parser";

import connectDb from "./utils/db.js";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import teacherRouters from "./routers/teacherRoutes.js";
import classRouters from "./routers/classRoutes.js";
import studentRouters from "./routers/studentRoutes.js";
import adminRouters from "./routers/adminRoutes.js";

dotenv.config();

connectDb();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookie());

app.use("/api/auths", adminRouters);
app.use("/api/teachers", teacherRouters);
app.use("/api/classes", classRouters);
app.use("/api/students", studentRouters);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  );
});
