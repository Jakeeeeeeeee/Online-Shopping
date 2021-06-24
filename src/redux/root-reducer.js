import { combineReducers } from "redux";
import userReducer from "./user/userReducer/userReducer";
import cartReducer from "./cart/cartReducer/cartReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import directoryReducer from "./directoryReducer/directoryReducer";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);