import { combineReducers } from "redux";
import counter, { decrease } from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
