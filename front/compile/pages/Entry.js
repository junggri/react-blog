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
var react_1 = __importStar(require("react"));
var styledComponent_1 = require("../styledComponent");
var component_1 = require("../component");
var react_router_dom_1 = require("react-router-dom");
var useCSRF_1 = __importDefault(require("../useHooks/useCSRF"));
var usePosts_1 = __importDefault(require("../useHooks/usePosts"));
var useLoginFlag_1 = __importDefault(require("../useHooks/useLoginFlag"));
var useCommon_1 = __importDefault(require("../useHooks/useCommon"));
var Entry = function () {
    useLoginFlag_1.default();
    var csrf = useCSRF_1.default();
    var _a = useCommon_1.default(), login = _a.login, newRequest = _a.newRequest, setNewRequset = _a.setNewRequset, onGetGaCount = _a.onGetGaCount, count = _a.count;
    var _b = usePosts_1.default(), AllPosts = _b.AllPosts, getAllPosts = _b.getAllPosts, onClearPost = _b.onClearPost, getPosts = _b.getPosts, posts = _b.posts;
    react_1.useEffect(function () {
        if (newRequest && csrf !== "") {
            getAllPosts(csrf);
            setNewRequset(false);
        }
    }, [getAllPosts, newRequest, setNewRequset, csrf]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(component_1.NavBar, null),
        react_1.default.createElement(styledComponent_1.MainContainerComp, null,
            react_1.default.createElement(styledComponent_1.SideBarComp, null,
                react_1.default.createElement("header", null,
                    react_1.default.createElement("h1", null, "tags")),
                react_1.default.createElement("ul", null,
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/java" },
                        react_1.default.createElement("li", null, "java")))),
            react_1.default.createElement(styledComponent_1.PostItemComp, null,
                react_1.default.createElement("div", { className: "post-img" },
                    react_1.default.createElement("img", { src: "/images/Logo.svg", alt: "" })),
                react_1.default.createElement("header", null,
                    react_1.default.createElement("h1", null, "content Name"),
                    react_1.default.createElement("h2", null, "detail")),
                react_1.default.createElement("footer", null,
                    react_1.default.createElement("span", null, "read"),
                    react_1.default.createElement("span", null, "comment"))),
            react_1.default.createElement(styledComponent_1.PostItemComp, null,
                react_1.default.createElement("div", { className: "post-img" },
                    react_1.default.createElement("img", { src: "/images/Logo.svg", alt: "" })),
                react_1.default.createElement("header", null,
                    react_1.default.createElement("h1", null, "content Name"),
                    react_1.default.createElement("h2", null, "detail")),
                react_1.default.createElement("footer", null,
                    react_1.default.createElement("span", null, "read"),
                    react_1.default.createElement("span", null, "comment"))),
            " ",
            react_1.default.createElement(styledComponent_1.PostItemComp, null,
                react_1.default.createElement("div", { className: "post-img" },
                    react_1.default.createElement("img", { src: "/images/Logo.svg", alt: "" })),
                react_1.default.createElement("header", null,
                    react_1.default.createElement("h1", null, "content Name"),
                    react_1.default.createElement("h2", null, "detail")),
                react_1.default.createElement("footer", null,
                    react_1.default.createElement("span", null, "read"),
                    react_1.default.createElement("span", null, "comment"))))));
};
exports.default = Entry;
