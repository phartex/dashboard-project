import {
  GET_VACANCIES,
  SET_LOADING,
  JOBS_ERROR,
  ADD_VACANCIES,
  DELETE_VACANCIES
} from "./types";
import { fetcher } from "./index";
import axios from "axios";

// Get jobs from server
export const getVacancies = () => async dispatch => {
  try {
    setLoading();
    // const res = await fetcher.get("/Vacancy");
    // const data = await res.json();

    const res = await axios.get(
      "https://sidmachservicedev.azurewebsites.net/api/Vacancy"
    );

    console.log(res);

    dispatch({
      type: GET_VACANCIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: err.response
    });
  }
};

//ADD new Vacancy

export const addVacancies = vacancy => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    setLoading();
    // const res = await fetcher.get("/Vacancy");
    // const data = await res.json();

    const res = await axios.post(
      "https://sidmachservicedev.azurewebsites.net/api/Vacancy",
      vacancy,
      config
    );

    dispatch({
      type: ADD_VACANCIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: err.response
    });
    console.log(err.response);
  }
};

//delete vacancy from server

export const deleteVacancy = id => async dispatch => {
  try {
    setLoading();
    // const res = await fetcher.get("/Vacancy");
    // const data = await res.json();

    await axios.delete(
      `https://sidmachservicedev.azurewebsites.net/api/Vacancy?id=${id}`
    );

    dispatch({
      type: DELETE_VACANCIES,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: err.response
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
