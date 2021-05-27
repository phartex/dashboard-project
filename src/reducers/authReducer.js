import {
  SET_LOADING,
  REGISTER,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN,
  AUTH_ERROR,
  LOGIN_FAIL
} from "../actions/types";
export const initialState = {
  isLoading: false, //for active default menu
  isAuthenticated: false, //for active default menu, set blank for horizontal
  isApplicant: false,
  users: {},
  token: null,
  trackingId: null,
  authenticated: false,
  report: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        users: action.payload
      };
    case REGISTER:
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
