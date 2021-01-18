import { combineReducers } from "redux";
import { LoginReducer, LogoutReducer } from "./authReducers";
import { TeachersReducer, TeacherReducer } from "./teacherReducers";
import { StudentsReducer, StudentReducer } from "./studentReducers";
import { ClassesReducer, ClassReducer } from "./classReducers";
export default combineReducers({
  logIn: LoginReducer,
  logout: LogoutReducer,
  teachers: TeachersReducer,
  teacher: TeacherReducer,
  students: StudentsReducer,
  student: StudentReducer,
  classes: ClassesReducer,
  class: ClassReducer,
});
