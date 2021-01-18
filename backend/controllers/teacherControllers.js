import {
  deleteHand,
  updateHand,
  createHand,
  getAllHand,
  getHand,
} from "./handlerControllers.js";
import Teacher from "../models/teacherModels.js";

const getTeacher = getHand(Teacher);
const getAllTeachers = getAllHand(Teacher);
const createNewTeacher = createHand(Teacher);
const updateTeacher = updateHand(Teacher);
const deleteTeacher = deleteHand(Teacher);

export {
  getTeacher,
  getAllTeachers,
  createNewTeacher,
  updateTeacher,
  deleteTeacher,
};
