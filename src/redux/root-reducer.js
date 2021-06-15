import { combineReducers } from "redux";
import userReducer from "./user/userReducer/userReducer";
import cartReducer from "./cart/cartReducer/carReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});