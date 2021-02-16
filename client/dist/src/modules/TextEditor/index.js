"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSetTempData = exports.onSetThumbNail = exports.onSetDetail = exports.onSetKindOfPosts = exports.onSetTopic = exports.onSetContentName = exports.onSetContent = void 0;
var SET_CONTENT = "textEdit/SET_CONTENT";
var SET_CONTENT_NAME = "textEdit/SET_CONTENT_NAME";
var SET_TOPIC = "textEdit/SET_TOPIC";
var SET_KIND_OF_POSTS = "textEdit/SET_KIND_OF_POSTS";
var SET_DETAIL = "textEdit/SET_DETAIL";
var SET_THUMBNAIL = "textEdit/SET_THUMBNAIL";
var SET_TEMP_DATA = "textEdit/SET_TEMP_DATA";
var onSetContent = function (content) { return ({ type: SET_CONTENT, payload: content }); };
exports.onSetContent = onSetContent;
var onSetContentName = function (contentName) { return ({ type: SET_CONTENT_NAME, payload: contentName }); };
exports.onSetContentName = onSetContentName;
var onSetTopic = function (topic) { return ({ type: SET_TOPIC, payload: topic }); };
exports.onSetTopic = onSetTopic;
var onSetKindOfPosts = function (kindOfPosts) { return ({ type: SET_KIND_OF_POSTS, payload: kindOfPosts }); };
exports.onSetKindOfPosts = onSetKindOfPosts;
var onSetDetail = function (detail) { return ({ type: SET_DETAIL, payload: detail }); };
exports.onSetDetail = onSetDetail;
var onSetThumbNail = function (thumbnail) { return ({ type: SET_THUMBNAIL, payload: thumbnail }); };
exports.onSetThumbNail = onSetThumbNail;
var onSetTempData = function (data) { return ({ type: SET_TEMP_DATA, payload: data }); };
exports.onSetTempData = onSetTempData;
var initialState = {
    contentName: "",
    content: "",
    topicName: "",
    kindofPosts: "",
    detail: "",
    thumbnail: null,
};
function TextEditor(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SET_CONTENT:
            return __assign(__assign({}, state), { content: action.payload });
        case SET_CONTENT_NAME:
            return __assign(__assign({}, state), { contentName: action.payload });
        case SET_TOPIC:
            return __assign(__assign({}, state), { topicName: action.payload });
        case SET_KIND_OF_POSTS:
            return __assign(__assign({}, state), { kindofPosts: action.payload });
        case SET_DETAIL:
            return __assign(__assign({}, state), { detail: action.payload });
        case SET_THUMBNAIL:
            return __assign(__assign({}, state), { thumbnail: action.payload });
        case SET_TEMP_DATA:
            return __assign(__assign({}, state), { contentName: action.payload.contentName, content: action.payload.content, topicName: action.payload.topicName, kindofPosts: action.payload.kindofPosts, detail: action.payload.detail, thumbnail: action.payload.thumbnail });
        default:
            return state;
    }
}
exports.default = TextEditor;
