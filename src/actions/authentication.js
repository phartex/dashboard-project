import axios from "axios";
import {
  REGISTER_FAIL,
  AUTH_ERROR,
  REGISTER,
  LOGIN,
  USER_LOADED,
  LOGIN_FAIL
} from "./types.js";
import setAuthToken from "../utils/setAuthToken";

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(
      "https://sidmachservicedev.azurewebsites.net/api/Auth/verify-user/{id}"
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const register = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      "https://sidmachservicedev.azurewebsites.net/api/Auth/register",
      formData,
      config
    );

    dispatch({
      type: REGISTER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    });
    console.log(err.response);
  }
};

// Login User
export const login = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(
      "https://sidmachservicedev.azurewebsites.net/api/Auth/login",
      formData,
      config
    );

    dispatch({
      type: LOGIN,
      payload: res.data
    });

    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    });
  }
};
