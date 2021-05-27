import {
  GET_VACANCIES,
  SET_LOADING,
  JOBS_ERROR,
  ADD_VACANCIES,
  DELETE_VACANCIES
} from "../actions/types";
const initialState = {
  vacancies: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VACANCIES:
      return {
        ...state,
        vacancies: action.payload,
        loading: false
      };
    case ADD_VACANCIES:
      return {
        ...state,
        vacancies: [...state.vacancies, action.payload],
        loading: false
      };
    case DELETE_VACANCIES:
      return {
        ...state,
        vacancies: state.logs.filter(vacancy => vacancy.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case JOBS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
