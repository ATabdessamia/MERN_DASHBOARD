import axios from "axios";
import { toast } from "react-toastify";

import {
  CLASSES_REQUEST,
  CLASSES_SUCCESS,
  CLASSES_FAIL,
  CLASS_REQUEST,
  CLASS_SUCCESS,
  CLASS_FAIL,
} from "../constants/classConstants";

export const getAllClasses = (keyword = "") => async (dispatch) => {
  try {
    dispatch({
      type: CLASSES_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/classes?keyword=${keyword}`, config);

    dispatch({ type: CLASSES_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: CLASSES_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};

export const getClass = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CLASS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/classes/${id}`, config);

    dispatch({ type: CLASS_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: CLASS_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};

export const createClass = (
  className,
  teachers,
  students,
  schoolYear
) => async (dispatch) => {
  try {
    dispatch({
      type: CLASS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/classes`,
      { className, teachers, attend: { students, schoolYear } },
      config
    );

    dispatch({ type: CLASS_SUCCESS, payload: data.data.data });
    toast.success("saved");
  } catch (error) {
    dispatch({
      type: CLASS_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};

export const deleteClass = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CLASS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(`/api/classes/${id}`, config);

    dispatch({ type: CLASS_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: CLASS_FAIL,
      payload:
        error.response && error.response.statusText
          ? error.response.statusText
          : error.message,
    });
  }
};
