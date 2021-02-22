import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/GlobalStyles";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "../src/styles/highlight/atom-one-light.css";
import App from "./shared/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./lib/store";
import { Provider } from "react-redux";
import { loadableReady } from "@loadable/component";


const Root = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <GlobalStyles />
            <App />
         </BrowserRouter>
      </Provider>
   );
};

const root = document.getElementById("root");

if (process.env.NODE_ENV === "development") {
   loadableReady(() => {
      ReactDOM.hydrate(<Root />, root);
   });
} else {
   ReactDOM.render(<Root />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
// ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
