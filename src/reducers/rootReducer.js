import { combineReducers } from "redux";
import burgerReducer from "./burgerReducer";

const rootReducer = combineReducers({
  burger: burgerReducer,
});

export default rootReducer;
