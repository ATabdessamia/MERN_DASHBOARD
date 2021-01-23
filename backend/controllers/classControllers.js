import {
  deleteHand,
  updateHand,
  createHand,
  getAllHand,
  getHand,
} from "./handlerControllers.js";
import Class from "../models/classModels.js";

const getClass = getHand(Class);
const getAllClasss = getAllHand(Class, { className: 1 });
const createNewClass = createHand(Class);
const updateClass = updateHand(Class);
const deleteClass = deleteHand(Class);

export { getClass, getAllClasss, createNewClass, updateClass, deleteClass };
