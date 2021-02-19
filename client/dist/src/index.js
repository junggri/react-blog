"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var serviceWorkerRegistration = __importStar(require("./serviceWorkerRegistration"));
require("../src/styles/highlight/atom-one-light.css");
var App_1 = __importDefault(require("./shared/App"));
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("./lib/store");
var react_redux_1 = require("react-redux");
var component_1 = require("@loadable/component");
var react_helmet_async_1 = require("react-helmet-async");
var Root = function () {
    return (react_1.default.createElement(react_helmet_async_1.HelmetProvider, null,
        react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(App_1.default, null)))));
};
var root = document.getElementById("root");
// 프로덕션 환경 에서는 loadableReady 와 hydrate 를 사용하고
// 개발 환경에서는 기존 하던 방식으로 처리
if (process.env.NODE_ENV === "production") {
    component_1.loadableReady(function () {
        react_dom_1.default.hydrate(react_1.default.createElement(Root, null), root);
    });
}
else {
    react_dom_1.default.render(react_1.default.createElement(Root, null), root);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
// ReactDOM.render(<Root />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
