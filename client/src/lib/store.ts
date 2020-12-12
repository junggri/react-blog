import { applyMiddleware, createStore } from "redux";
import rootReducer from "../modules";
import Thunk from "redux-thunk";
import TokenMiddleWare from "../middleWare/TokenMiddleWare";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const middleWares = [Thunk, TokenMiddleWare];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));

