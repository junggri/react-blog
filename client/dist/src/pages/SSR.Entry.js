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
var styled_comp_1 = require("../styled-comp");
var useCommon_1 = __importDefault(require("../useHooks/useCommon"));
var usePosts_1 = __importDefault(require("../useHooks/usePosts"));
var component_1 = require("../component");
var react_router_dom_1 = require("react-router-dom");
var useLoginFlag_1 = __importDefault(require("../useHooks/useLoginFlag"));
function SSREntry(_a) {
    var match = _a.match, location = _a.location;
    useLoginFlag_1.default();
    var _b = useCommon_1.default(), login = _b.login, onGetGaCount = _b.onGetGaCount, count = _b.count;
    var _c = usePosts_1.default(), AllPosts = _c.AllPosts, onClearPost = _c.onClearPost, getPosts = _c.getPosts, posts = _c.posts;
    react_1.useEffect(function () {
        onGetGaCount();
    }, []);
    return (react_1.default.createElement(styled_comp_1.EntryContainerComp, null,
        react_1.default.createElement(component_1.SideBarContainer, { topic: AllPosts, login: login, location: location, count: count }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/tag/:topic", exact: true, render: function () { return (react_1.default.createElement(component_1.SpecificTopicContainer, { match: match, posts: posts, login: login, onClearPost: onClearPost, getPosts: getPosts })); } }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/tag", exact: true, render: function () { return (react_1.default.createElement(component_1.TagsContainer, { Allposts: AllPosts })); } }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/about", exact: true, render: function () { return (react_1.default.createElement(component_1.AboutContainer, null)); } })));
}
exports.default = SSREntry;
