"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("../pages");
function App() {
    return (react_1.default.createElement("div", { id: "App" },
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: pages_1.Entry }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/post", exact: true, component: pages_1.Entry }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/tag", exact: true, component: pages_1.Entry2 }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/tag/:topic", exact: true, component: pages_1.Entry2 }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/about", exact: true, component: pages_1.Entry2 }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/topic/:topic/:postsId", exact: true, component: pages_1.Posts }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/write", exact: true, component: pages_1.TextEditor }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/admin/leejeongsoo", exact: true, component: pages_1.Admin }),
            react_1.default.createElement(react_router_dom_1.Route, { render: function () { return react_1.default.createElement("h1", null, "Not found"); } }))));
}
exports.default = App;
