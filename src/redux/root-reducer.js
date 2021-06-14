import { combineReducers } from "redux";
import userReducer from "./user/userReducer/userReducer";

export default combineReducers({
  user: userReducer
});