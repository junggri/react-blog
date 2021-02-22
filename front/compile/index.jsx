import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
const root = document.getElementById("root");
const Root = () => {
    return (<BrowserRouter>
      <App />
    </BrowserRouter>);
};
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
    loadableReady(() => {
        ReactDOM.hydrate(<Root />, root);
    });
}
else {
    ReactDOM.render(<Root />, root);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
