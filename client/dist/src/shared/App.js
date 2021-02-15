"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("../pages");
var UseMeta_1 = __importDefault(require("../useHooks/UseMeta"));
function App() {
    var data = {
        title: "junggri blog",
        description: "자바스크립트와 웹 프로그래밍, 매일 매일 성장해 나가기를 원하는 블로입니다.",
        image: "https://www.junggri.com/images/og.jpg",
        type: "website",
    };
    return (react_1.default.createElement("div", { id: "App" },
        react_1.default.createElement(UseMeta_1.default, { data: data }),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: ["/", "/post", "/tag", "/tag/:topic", "/about"], exact: true, component: pages_1.Entry }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/topic/:topic/:postsId", exact: true, component: pages_1.Posts }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/write", exact: true, component: pages_1.TextEditor }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/admin/leejeongsoo", exact: true, component: pages_1.Admin }),
            react_1.default.createElement(react_router_dom_1.Route, { render: function () { return react_1.default.createElement("h1", null, "Not found"); } }))));
}
exports.default = App;
