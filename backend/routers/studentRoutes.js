import express from "express";

import {
  getStudent,
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentControllers.js";
import { isLoggedIn, protect } from "../controllers/adminControllers.js";

const studentRouter = express.Router();

studentRouter.use(isLoggedIn);
studentRouter.use(protect);

studentRouter.route("/").get(getAllStudents).post(createNewStudent);
studentRouter
  .route("/:id")
  .get(getStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

export default studentRouter;
