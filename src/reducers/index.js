import { combineReducers } from "redux";
import vacancyReducer from "./vacancyReducer";
import applicationReducer from "./applicationReducer";
import authReducer from "./authReducer";

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
  vacancy: vacancyReducer,
  application: applicationReducer,
  auth: authReducer
});
