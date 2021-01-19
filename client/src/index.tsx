import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/GlobalStyles";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./shared/App";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import "../src/styles/highlight/atom-one-light.css";

ReactDOM.render(
   <>
      <Provider store={store}>
         <GlobalStyles />
         <App />
      </Provider>
   </>,
   document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
// ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
