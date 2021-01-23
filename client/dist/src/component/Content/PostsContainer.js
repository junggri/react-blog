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
var styled_comp_1 = require("../../styled-comp");
var usePosts_1 = __importDefault(require("../../useHooks/usePosts"));
var react_router_dom_1 = require("react-router-dom");
var cg_1 = require("react-icons/cg");
var react_highlight_js_1 = __importDefault(require("react-highlight.js"));
var dompurify_1 = __importDefault(require("dompurify"));
var useHelmet_1 = __importDefault(require("../../useHooks/useHelmet"));
var DOMPurify = typeof window === "object" ? dompurify_1.default(window) : function () { return false; };
function PostsContainer(_a) {
    var match = _a.match;
    var _b = usePosts_1.default(), getPost = _b.getPost, post = _b.post, onClearPost = _b.onClearPost;
    var data = post.data;
    react_1.useEffect(function () {
        getPost(match.params.topic, match.params.postsId);
        return function () { return onClearPost(); };
    }, [match.params.topic, match.params.postsId, onClearPost, getPost]);
    var MakeHtml = function () { return ({
        __html: typeof window === "object" ? DOMPurify.sanitize(data.content) : null,
    }); };
    if (!post.data)
        return null;
    return (react_1.default.createElement(styled_comp_1.PostsContainerComp, { width: 1 },
        react_1.default.createElement(useHelmet_1.default, { keywords: data.result[0].content_name, description: data.result[0].detail, title: data.result[0].content_name }),
        react_1.default.createElement("div", { className: "posts-container-iconbox" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement(cg_1.CgHome, { className: "icon-tohome" }))),
        react_1.default.createElement("div", { className: "posts-name" }, data.result[0].content_name),
        react_1.default.createElement("div", { className: "posts-detail" }, data.result[0].detail),
        react_1.default.createElement(react_highlight_js_1.default, { language: "react" },
            react_1.default.createElement("div", { dangerouslySetInnerHTML: MakeHtml(), className: "posts-content" })),
        react_1.default.createElement("div", { className: "posts-created" }, data.result[0].created)));
}
exports.default = PostsContainer;
