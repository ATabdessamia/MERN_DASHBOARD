import express from "express";

import {
  getClass,
  getAllClasss,
  createNewClass,
  updateClass,
  deleteClass,
} from "../controllers/classControllers.js";
import { isLoggedIn, protect } from "../controllers/adminControllers.js";

const classRouter = express.Router();

classRouter.use(isLoggedIn);
classRouter.use(protect);

classRouter.route("/").get(getAllClasss).post(createNewClass);
classRouter.route("/:id").get(getClass).patch(updateClass).delete(deleteClass);

export default classRouter;
