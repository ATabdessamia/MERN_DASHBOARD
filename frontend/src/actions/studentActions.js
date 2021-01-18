import axios from "axios";
import { toast } from "react-toastify";

import {
  STUDENTS_REQUEST,
  STUDENTS_SUCCESS,
  STUDENTS_FAIL,
  STUDENT_REQUEST,
  STUDENT_SUCCESS,
  STUDENT_FAIL,
} from "../constants/studentConstants";

export const getAllStudents = (keyword = "") => async (dispatch) => {
  try {
    dispatch({
      type: STUDENTS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `/api/students?keyword=${keyword}`,
      config
    );

    dispatch({ type: STUDENTS_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: STUDENTS_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};

export const getStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/students/${id}`, config);

    dispatch({ type: STUDENT_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};

export const createStudent = (
  firstName,
  lastName,
  dateBirth,
  classes,
  teachers
) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/students`,
      { firstName, lastName, dateBirth, classes, teachers },
      config
    );

    dispatch({ type: STUDENT_SUCCESS, payload: data.data.data });
    toast.success("saved");
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
    toast.error(error.message);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(`/api/students/${id}`, config);

    dispatch({ type: STUDENT_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};
