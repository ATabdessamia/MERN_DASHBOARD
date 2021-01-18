import axios from "axios";
import history from "../history";
import { toast } from "react-toastify";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/authConstants";

export const login = (admin, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/auths",
      { admin, password },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.data.message
          ? error.response.data.data.message
          : error.message,
    });
    toast.error(error.response.data.data.message);
  }
};

export const logout = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get("/api/auths/logout", config);

  dispatch({ type: LOGOUT, payload: data });

  history.push("/");
};
