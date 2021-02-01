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
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var isNewPost_1 = __importDefault(require("../../lib/isNewPost"));
var PreloadContext_1 = require("../../lib/PreloadContext");
var Posts_1 = require("../../modules/Posts");
var useHelmet_1 = __importDefault(require("../../useHooks/useHelmet"));
function SpecificTopicContainer(_a) {
    var match = _a.match, login = _a.login, posts = _a.posts, onClearPost = _a.onClearPost, getPosts = _a.getPosts;
    var params = match.params.topic;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        getPosts(params);
        return function () { return onClearPost(); };
    }, [params]);
    PreloadContext_1.usePreloader(function () { return dispatch(Posts_1.onRequestPosts({ params: params })); });
    return (react_1.default.createElement(styled_comp_1.SpecificTopicContainerComp, null,
        react_1.default.createElement(useHelmet_1.default, { title: params + "\uC5D0 \uAD00\uB828\uB41C \uAC8C\uC2DC\uAE00\uB4E4\uC785\uB2C8\uB2E4.", keywords: "자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드", description: "자바스크립트부터 nodejs 그리고 알고리즘과 함께 성장해나가기를 기원하는 블로그입니다. 점점 더 발전해나가는 기술들을 함께 익히고 정그리 블로그를 찾아주는 사람들에게 감사드립니다." }),
        posts.data !== null &&
            (posts.data).map(function (e) { return (react_1.default.createElement(styled_comp_1.SpecificTopicItemsComp, { key: e.uid },
                react_1.default.createElement("span", { className: "item-created" },
                    "\uD83D\uDDD3",
                    e.created,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/tag/" + e.topic },
                        react_1.default.createElement("span", { className: "topic_link" }, (e.topic).toUpperCase())),
                    isNewPost_1.default(e.date) && react_1.default.createElement("span", { className: "post_is_new" }, "NEW")),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/topic/" + e.topic + "/" + e.uid },
                    react_1.default.createElement("div", { className: "item-contentName" },
                        react_1.default.createElement("span", null, e.content_name))),
                react_1.default.createElement("div", { className: "item-detail" }, e.detail),
                login &&
                    react_1.default.createElement("div", { className: "posts-admin-box", "data-id": e.uid, "data-topic": e.topic }))); })));
}
exports.default = SpecificTopicContainer;
