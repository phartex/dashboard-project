import { GET_JOBS, SET_LOADING, JOBS_ERROR } from "./types";

// Get jobs from server
export const getJobs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/jobs");
    const data = await res.json();

    dispatch({
      type: GET_JOBS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: err.response.data
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
