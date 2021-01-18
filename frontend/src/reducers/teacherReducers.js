import {
  TEACHERS_REQUEST,
  TEACHERS_SUCCESS,
  TEACHERS_FAIL,
  TEACHER_REQUEST,
  TEACHER_SUCCESS,
  TEACHER_FAIL,
} from "../constants/teacherConstants";

export const TeachersReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHERS_REQUEST:
      return { loading: true };
    case TEACHERS_SUCCESS:
      return { loading: false, teachers: action.payload };
    case TEACHERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TeacherReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_REQUEST:
      return { loading: true };
    case TEACHER_SUCCESS:
      return { loading: false, teacher: action.payload };
    case TEACHER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
