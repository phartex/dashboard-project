import { SET_LOADING, APPLICATIONS_ERROR, SUBMIT_APPLICATION } from "./types";
import axios from "axios";

//Submit new application
export const submitApplication = application => async dispatch => {
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
      application,
      config
    );

    dispatch({
      type: SUBMIT_APPLICATION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: APPLICATIONS_ERROR,
      payload: err.response
    });
    console.log(err.response);
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
