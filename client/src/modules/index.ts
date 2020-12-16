import {combineReducers} from "redux";
import posts from "./Posts";
import common from "./Common";
import topic from "./Topic";

const rootReducer = combineReducers({posts, common, topic});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>