import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  auth: bookingReducer,
});

export default rootReducer;
