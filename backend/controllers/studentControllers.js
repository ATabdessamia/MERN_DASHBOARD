import {
  deleteHand,
  updateHand,
  createHand,
  getAllHand,
  getHand,
} from "./handlerControllers.js";
import Student from "../models/studentModels.js";

const getStudent = getHand(Student);
const getAllStudents = getAllHand(Student, { firstName: 1 });
const createNewStudent = createHand(Student);
const updateStudent = updateHand(Student);
const deleteStudent = deleteHand(Student);

export {
  getStudent,
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
};
