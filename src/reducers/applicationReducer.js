import {
  SET_LOADING,
  APPLICATIONS_ERROR,
  SUBMIT_APPLICATION
} from "../actions/types";

const initialState = {
  applications: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_APPLICATION:
      return {
        ...state,
        applications: [...state.applications, action.payload],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case APPLICATIONS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
