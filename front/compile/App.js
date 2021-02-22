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
var react_1 = __importDefault(require("react"));
var component_1 = __importDefault(require("@loadable/component"));
var react_router_dom_1 = require("react-router-dom");
var Test1 = component_1.default(/* #__LOADABLE__ */ function () { return Promise.resolve().then(function () { return __importStar(require("./test1")); }); });
var Test2 = component_1.default(function () { return Promise.resolve().then(function () { return __importStar(require(/* webpackChunkName: "Header" */ "./test2")); }); });
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/test1" }, "test1"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/test2" }, "test2"),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/test1", exact: true, component: Test1 }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/test2", exact: true, component: Test2 })));
}
exports.default = App;
