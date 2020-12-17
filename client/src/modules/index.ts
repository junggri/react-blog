import { combineReducers } from "redux";
import posts from "./Posts";
import common from "./Common";
import topic from "./Topic";
import textEdit from "./TextEditor";

const rootReducer = combineReducers({ posts, common, topic, textEdit });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>