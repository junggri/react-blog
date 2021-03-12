"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSetTempData = exports.onSetThumbNail = exports.onSetDetail = exports.onSetKindOfPosts = exports.onSetTopic = exports.onSetContentName = exports.onSetContent = void 0;
const SET_CONTENT = "textEdit/SET_CONTENT";
const SET_CONTENT_NAME = "textEdit/SET_CONTENT_NAME";
const SET_TOPIC = "textEdit/SET_TOPIC";
const SET_KIND_OF_POSTS = "textEdit/SET_KIND_OF_POSTS";
const SET_DETAIL = "textEdit/SET_DETAIL";
const SET_THUMBNAIL = "textEdit/SET_THUMBNAIL";
const SET_TEMP_DATA = "textEdit/SET_TEMP_DATA";
const onSetContent = (content) => ({ type: SET_CONTENT, payload: content });
exports.onSetContent = onSetContent;
const onSetContentName = (contentName) => ({ type: SET_CONTENT_NAME, payload: contentName });
exports.onSetContentName = onSetContentName;
const onSetTopic = (topic) => ({ type: SET_TOPIC, payload: topic });
exports.onSetTopic = onSetTopic;
const onSetKindOfPosts = (kindOfPosts) => ({ type: SET_KIND_OF_POSTS, payload: kindOfPosts });
exports.onSetKindOfPosts = onSetKindOfPosts;
const onSetDetail = (detail) => ({ type: SET_DETAIL, payload: detail });
exports.onSetDetail = onSetDetail;
const onSetThumbNail = (thumbnail) => ({ type: SET_THUMBNAIL, payload: thumbnail });
exports.onSetThumbNail = onSetThumbNail;
const onSetTempData = (data) => ({ type: SET_TEMP_DATA, payload: data });
exports.onSetTempData = onSetTempData;
const initialState = {
    contentName: "",
    content: "",
    topicName: "",
    kindofPosts: "",
    detail: "",
    thumbnail: null,
};
function TextEditor(state = initialState, action) {
    switch (action.type) {
        case SET_CONTENT:
            return Object.assign(Object.assign({}, state), { content: action.payload });
        case SET_CONTENT_NAME:
            return Object.assign(Object.assign({}, state), { contentName: action.payload });
        case SET_TOPIC:
            return Object.assign(Object.assign({}, state), { topicName: action.payload });
        case SET_KIND_OF_POSTS:
            return Object.assign(Object.assign({}, state), { kindofPosts: action.payload });
        case SET_DETAIL:
            return Object.assign(Object.assign({}, state), { detail: action.payload });
        case SET_THUMBNAIL:
            return Object.assign(Object.assign({}, state), { thumbnail: action.payload });
        case SET_TEMP_DATA:
            return Object.assign(Object.assign({}, state), { contentName: action.payload.contentName, content: action.payload.content, topicName: action.payload.topicName, kindofPosts: action.payload.kindofPosts, detail: action.payload.detail, thumbnail: action.payload.thumbnail });
        default:
            return state;
    }
}
exports.default = TextEditor;
//# sourceMappingURL=index.js.map