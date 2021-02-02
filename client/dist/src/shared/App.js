"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("../pages");
var useHelmet_1 = __importDefault(require("../useHooks/useHelmet"));
function App() {
    return (react_1.default.createElement("div", { id: "App" },
        react_1.default.createElement(useHelmet_1.default, { title: "정그리의 블로그입니다.", keywords: "자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드", description: "자바스크립트부터 nodejs 그리고 알고리즘과 함께 성장해나가기를 기원하는 블로그입니다. 점점 더 발전해나가는 기술들을 함께 익히고 정그리 블로그를 찾아주는 사람들에게 감사드립니다." }),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: ["/", "/post", "/tag", "/tag/:topic"], exact: true, component: pages_1.SSR_Entry }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/topic/:topic/:postsId", exact: true, component: pages_1.Posts }),
            react_1.default.createElement(react_router_dom_1.Route, { path: ["/write", "/write/:tempId"], exact: true, component: pages_1.TextEditor }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/admin/leejeongsoo", exact: true, component: pages_1.Admin }),
            react_1.default.createElement(react_router_dom_1.Route, { render: function () { return react_1.default.createElement("h1", null, "Not found"); } }))));
}
exports.default = App;
