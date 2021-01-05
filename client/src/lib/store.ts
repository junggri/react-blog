import { applyMiddleware, createStore } from "redux";
import rootReducer from "../modules";
import Thunk from "redux-thunk";
import TokenMiddleWare from "../middleWare/TokenMiddleWare";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";


const middleWares = [Thunk, TokenMiddleWare];

const devTools =
   process.env.NODE_ENV === "production"
      ? applyMiddleware(...middleWares)
      : composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, devTools);

