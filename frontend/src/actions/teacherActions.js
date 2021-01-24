import axios from "axios";
import { toast } from "react-toastify";

import {
  TEACHERS_REQUEST,
  TEACHERS_SUCCESS,
  TEACHERS_FAIL,
  TEACHER_REQUEST,
  TEACHER_SUCCESS,
  TEACHER_FAIL,
} from "../constants/teacherConstants";

export const getAllTeachers = (keyword = "", page = "") => async (dispatch) => {
  try {
    dispatch({
      type: TEACHERS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/teachers?keyword=${keyword}&page=${page}`
    );

    dispatch({ type: TEACHERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEACHERS_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const getTeacher = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_REQUEST,
    });

    const { data } = await axios.get(`/api/teachers/${id}`);

    dispatch({ type: TEACHER_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: TEACHER_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const createTeacher = (
  firstName,
  lastName,
  classes,
  Subjects,
  year
) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_REQUEST,
    });

    const { data } = await axios.post(`/api/teachers`, {
      firstName,
      lastName,
      teach: { classes, Subjects, year },
    });

    dispatch({ type: TEACHER_SUCCESS, payload: data.data.data });
    toast.success("saved");
  } catch (error) {
    dispatch({
      type: TEACHER_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const deleteTeacher = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_REQUEST,
    });

    const { data } = await axios.delete(`/api/teachers/${id}`);

    dispatch({ type: TEACHER_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: TEACHER_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
  }
};

export const updateTeacher = (
  id,
  firstName,
  lastName,
  classes,
  Subjects,
  year
) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_REQUEST,
    });

    const { data } = await axios.patch(`/api/teachers/${id}`, {
      firstName,
      lastName,
      teach: { classes, Subjects, year },
    });

    dispatch({ type: TEACHER_SUCCESS, payload: data.data.data });
    toast.success("saved");
  } catch (error) {
    dispatch({
      type: TEACHER_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
    toast.error("ID NOT FOUND");
  }
};
