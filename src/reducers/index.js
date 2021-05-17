import { combineReducers } from "redux";
import jobReducer from "./jobReducer";

// export const initialState = {
//   isLoading: false, //for active default menu
//   isAuthenticated: false, //for active default menu, set blank for horizontal
//   isApplicant: false,
//   user: {},
//   token: null,
//   trackingId: null,
//   authenticated: false,
//   report: {}
// };

export default combineReducers({
  job: jobReducer
});
