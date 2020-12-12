import { combineReducers } from "redux";
import posts from "./Posts";
import common from "./Common";


const rootReducer = combineReducers({ posts, common });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>