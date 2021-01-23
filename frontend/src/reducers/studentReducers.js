import {
  STUDENTS_REQUEST,
  STUDENTS_SUCCESS,
  STUDENTS_FAIL,
  STUDENT_REQUEST,
  STUDENT_SUCCESS,
  STUDENT_FAIL,
} from "../constants/studentConstants";

export const StudentsReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENTS_REQUEST:
      return { loading: true, students: [] };
    case STUDENTS_SUCCESS:
      return { loading: false, students: action.payload.data };
    case STUDENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const StudentReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_REQUEST:
      return { loading: true };
    case STUDENT_SUCCESS:
      return { loading: false, student: action.payload };
    case STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
