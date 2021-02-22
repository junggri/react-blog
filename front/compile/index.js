"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/stable");
require("regenerator-runtime/runtime");
require("react-app-polyfill/ie9");
require("react-app-polyfill/ie11");
require("react-app-polyfill/stable");
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("./App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var react_router_dom_1 = require("react-router-dom");
var component_1 = require("@loadable/component");
var root = document.getElementById("root");
var Root = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(App_1.default, null)));
};
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
    component_1.loadableReady(function () {
        react_dom_1.default.hydrate(react_1.default.createElement(Root, null), root);
    });
}
else {
    react_dom_1.default.render(react_1.default.createElement(Root, null), root);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
