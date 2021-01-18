import {
  CLASSES_REQUEST,
  CLASSES_SUCCESS,
  CLASSES_FAIL,
  CLASS_REQUEST,
  CLASS_SUCCESS,
  CLASS_FAIL,
} from "../constants/classConstants";

export const ClassesReducer = (state = {}, action) => {
  switch (action.type) {
    case CLASSES_REQUEST:
      return { loading: true };
    case CLASSES_SUCCESS:
      return { loading: false, classes: action.payload };
    case CLASSES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ClassReducer = (state = {}, action) => {
  switch (action.type) {
    case CLASS_REQUEST:
      return { loading: true };
    case CLASS_SUCCESS:
      return { loading: false, class: action.payload };
    case CLASS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
