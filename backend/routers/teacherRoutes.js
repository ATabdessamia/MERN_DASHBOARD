import express from "express";

import {
  getTeacher,
  getAllTeachers,
  createNewTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacherControllers.js";

import { isLoggedIn, protect } from "../controllers/adminControllers.js";

const teacherRouter = express.Router();

teacherRouter.use(isLoggedIn);
teacherRouter.use(protect);

teacherRouter.route("/").get(getAllTeachers).post(createNewTeacher);
teacherRouter
  .route("/:id")
  .get(getTeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);

export default teacherRouter;
