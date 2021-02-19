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
var react_router_dom_1 = require("react-router-dom");
var UseMeta_1 = __importDefault(require("../useHooks/UseMeta"));
var pages_1 = require("../pages");
var component_1 = __importDefault(require("@loadable/component"));
var Entry = component_1.default(function () { return Promise.resolve().then(function () { return __importStar(require("../pages/Entry")); }); });
var Admin = component_1.default(function () { return Promise.resolve().then(function () { return __importStar(require("../pages/Admin")); }); });
var Posts = component_1.default(function () { return Promise.resolve().then(function () { return __importStar(require("../pages/Posts")); }); });
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
            react_1.default.createElement(react_router_dom_1.Route, { path: ["/", "/post", "/tag", "/tag/:topic", "/about"], exact: true, component: Entry }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/topic/:topic/:postsId", exact: true, component: Posts }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/write", exact: true, component: pages_1.TextEditor }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/admin/leejeongsoo", exact: true, component: Admin }),
            react_1.default.createElement(react_router_dom_1.Route, { render: function () { return react_1.default.createElement("h1", null, "Not found"); } }))));
}
exports.default = App;
