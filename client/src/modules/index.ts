import { combineReducers } from "redux";
import Posts from "./Posts";
import Common from "./Common";

const rootReducer = combineReducers({ Posts, Common });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>