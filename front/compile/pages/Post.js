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
var react_router_dom_1 = require("react-router-dom");
var cg_1 = require("react-icons/cg");
var react_highlight_js_1 = __importDefault(require("react-highlight.js"));
var usePosts_1 = __importDefault(require("@useHooks/usePosts"));
var dompurify_1 = __importDefault(require("dompurify"));
var react_redux_1 = require("react-redux");
var UseMeta_1 = __importDefault(require("@useHooks/UseMeta"));
var PreloadContext_1 = require("@lib/PreloadContext");
var index_1 = require("@component/index");
var Post = function (_a) {
    var match = _a.match;
    var _b = usePosts_1.default(), getPost = _b.getPost, post = _b.post, onCleatPostData = _b.onCleatPostData;
    var data = post.data;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        getPost(match.params.topic, match.params.postId);
        return function () { return onCleatPostData(); };
    }, [match.params.topic, match.params.postId, onCleatPostData, getPost]);
    var DOMPurify = typeof window === "object" ? dompurify_1.default(window) : function () { return false; };
    PreloadContext_1.usePreloader(function () { return dispatch(getPost(match.params.topic, match.params.postId)); });
    if (!data)
        return null;
    var meta = {
        title: data.result[0].content_name,
        description: data.result[0].detail,
        image: !data.result[0].thumbnail
            ? "https://www.junggri.com/images/og.jpg"
            : "https://www.junggri.com/thumbnail/" + data.result[0].thumbnail,
        type: "website",
    };
    var MakeHtml = function () { return ({
        __html: typeof window === "object" ? DOMPurify.sanitize(data.content) : null,
    }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(UseMeta_1.default, { data: meta }),
        react_1.default.createElement(styledComponent_1.PostsContainerComp, null,
            react_1.default.createElement("div", { className: "posts-container-iconbox" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                    react_1.default.createElement(cg_1.CgHome, { className: "icon-tohome" }))),
            react_1.default.createElement("div", { className: "posts-name" }, data.result[0].content_name),
            react_1.default.createElement("div", { className: "posts-detail" }, data.result[0].detail),
            react_1.default.createElement(react_highlight_js_1.default, { language: "react" },
                react_1.default.createElement("div", { dangerouslySetInnerHTML: MakeHtml(), className: "posts-content" })),
            react_1.default.createElement("div", { className: "posts-created" }, data.result[0].created)),
        react_1.default.createElement(index_1.CommentContainer, { topic: match.params.topic, postId: match.params.postId, contentName: data.result[0].content_name })));
};
exports.default = Post;
