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

export const getAllTeachers = (keyword = "") => async (dispatch) => {
  try {
    dispatch({
      type: TEACHERS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `/api/teachers?keyword=${keyword}`,
      config
    );

    dispatch({ type: TEACHERS_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: TEACHERS_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};

export const getTeacher = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/teachers/${id}`, config);

    dispatch({ type: TEACHER_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: TEACHER_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/teachers`,
      { firstName, lastName, teach: { classes, Subjects, year } },
      config
    );

    dispatch({ type: TEACHER_SUCCESS, payload: data.data.data });
    toast.success("saved");
  } catch (error) {
    dispatch({
      type: TEACHER_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};

export const deleteTeacher = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(`/api/teachers/${id}`, config);

    dispatch({ type: TEACHER_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: TEACHER_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};
