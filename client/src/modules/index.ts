import {combineReducers} from "redux";
import Data from "./Data";
import Common from "./Common"

const rootReducer = combineReducers({Data, Common});

export default rootReducer;