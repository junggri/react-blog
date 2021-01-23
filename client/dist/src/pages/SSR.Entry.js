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
var useHelmet_1 = __importDefault(require("../useHooks/useHelmet"));
var TopMetaBar_1 = __importDefault(require("../component/Home/TopMetaBar"));
var useCommon_1 = __importDefault(require("../useHooks/useCommon"));
var usePosts_1 = __importDefault(require("../useHooks/usePosts"));
var component_1 = require("../component");
function SSREntry(_a) {
    var match = _a.match;
    var _b = useCommon_1.default(), login = _b.login, count = _b.count, newRequest = _b.newRequest, setNewRequset = _b.setNewRequset;
    var _c = usePosts_1.default(), AllPosts = _c.AllPosts, getAllPosts = _c.getAllPosts;
    react_1.useEffect(function () {
        if (newRequest) {
            getAllPosts();
            setNewRequset(false);
        }
    }, [getAllPosts, newRequest, setNewRequset]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled_comp_1.EntryContainerComp, null,
            react_1.default.createElement(useHelmet_1.default, { keywords: "nodejs 그리고 자바스크립트의 이야기들", description: "자바스크립트부터 웹까지의 전반적인 이야기와 나의 성장이야기", title: "junggri 블로그" }),
            react_1.default.createElement(TopMetaBar_1.default, { match: match, count: count }),
            match.path !== "/about" ? react_1.default.createElement(component_1.SideBarContainer, { topic: AllPosts, login: login }) : null)));
}
exports.default = SSREntry;
