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
var react_router_dom_1 = require("react-router-dom");
var isNewPost_1 = __importDefault(require("../../lib/isNewPost"));
function SpecificTopicContainer(_a) {
    var width = _a.width, match = _a.match, login = _a.login, posts = _a.posts;
    var params = match.params.topic;
    var _b = react_1.useState([]), post = _b[0], setPost = _b[1];
    react_1.useEffect(function () {
        setPost(posts.data[params]);
    }, [params, posts]);
    return (react_1.default.createElement(styled_comp_1.SpecificTopicContainerComp, { width: width }, post.map(function (e) { return (react_1.default.createElement(styled_comp_1.SpecificTopicItemsComp, { key: e.uid },
        react_1.default.createElement("span", { className: "item-created" },
            "\uD83D\uDDD3 ",
            e.created),
        isNewPost_1.default(e.date) && react_1.default.createElement("span", { className: "post_is_new" }, "new"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/topic/" + e.topic + "/" + e.uid },
            react_1.default.createElement("div", { className: "item-contentName" }, e.content_name)),
        react_1.default.createElement("div", { className: "item-detail" },
            "\uD83C\uDF10 ",
            e.detail),
        login &&
            react_1.default.createElement("div", { className: "posts-admin-box", "data-id": e.uid, "data-topic": e.topic }))
    // <SpecificTopicItemsComp key={e.uid} to={`/topic/${e.topic}/${e.uid}`}>
    //    <span className="item-created">{e.created}</span>
    //    <div className="item-contentName">{e.content_name}</div>
    //    <div className="item-detail">{e.detail}</div>
    //    <section className="posts-keyword-box">
    //       <span className="posts-keywords">
    //          <span>
    //             {e.topic}
    //          </span>
    //       </span>
    //    </section>
    // </SpecificTopicItemsComp>
    ); })));
}
exports.default = SpecificTopicContainer;
