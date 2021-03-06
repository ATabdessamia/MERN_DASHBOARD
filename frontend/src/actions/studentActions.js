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

export const getAllStudents = (keyword = "", page = "") => async (dispatch) => {
  try {
    dispatch({
      type: STUDENTS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/students?keyword=${keyword}&&page=${page}`
    );

    dispatch({ type: STUDENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDENTS_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const getStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_REQUEST,
    });

    const { data } = await axios.get(`/api/students/${id}`);

    dispatch({ type: STUDENT_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const createStudent = (
  firstName,
  lastName,
  dateBirth,
  className,
  STUDENTs
) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_REQUEST,
    });

    const { data } = await axios.post(`/api/students`, {
      firstName,
      lastName,
      dateBirth,
      className,
      STUDENTs,
    });

    dispatch({ type: STUDENT_SUCCESS, payload: data.data.data });
    toast.success("saved");
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_REQUEST,
    });

    const { data } = await axios.delete(`/api/students/${id}`);

    dispatch({ type: STUDENT_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const updateStudent = (
  id,
  firstName,
  lastName,
  dateBirth,
  className,
  STUDENTs
) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_REQUEST,
    });

    const { data } = await axios.patch(`/api/students/${id}`, {
      firstName,
      lastName,
      dateBirth,
      className,
      STUDENTs,
    });

    dispatch({ type: STUDENT_SUCCESS, payload: data.data.data });
    toast.success("saved");
  } catch (error) {
    dispatch({
      type: STUDENT_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
    toast.error("ID NOT FOUND");
  }
};
