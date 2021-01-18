import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import { teachers, classes, students } from "./data/data.js";
import Teachers from "./models/teacherModels.js";
import Classes from "./models/classModels.js";
import Students from "./models/studentModels.js";
import connectDb from "./utils/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Teachers.deleteMany();
    await Classes.deleteMany();
    await Students.deleteMany();

    await Teachers.insertMany(teachers);
    await Classes.insertMany(classes);
    await Students.insertMany(students);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Teachers.deleteMany();
    await Classes.deleteMany();
    await Students.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
