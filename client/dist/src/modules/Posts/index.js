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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequestTemoPost = exports.onRequestAllPosts = exports.onRequsetPost = exports.onRequestPosts = exports.CLEAR_POST_DATA = exports.CLEAR_POST = exports.GET_TEMP_POST_ERROR = exports.GET_TEMP_POST_SUCCESS = exports.GET_TEMP_POST = exports.GET_ALL_POSTS_ERROR = exports.GET_ALL_POSTS_SECCUESS = exports.GET_ALL_POSTS = exports.GET_POST_ERROR = exports.GET_POST_SUCCESS = exports.GET_POST = exports.GET_POSTS_ERROR = exports.GET_POSTS_SUCCESS = exports.GET_POSTS = void 0;
var axios_1 = __importDefault(require("../../lib/axios"));
var PostsUtil_1 = require("./lib/PostsUtil");
exports.GET_POSTS = "data/GET_POSTS";
exports.GET_POSTS_SUCCESS = "data/GET_POSTS_SUCCESS";
exports.GET_POSTS_ERROR = "data/GET_POSTS_ERROR";
exports.GET_POST = "data/GET_POST";
exports.GET_POST_SUCCESS = "data/GET_POST_SUCCESS";
exports.GET_POST_ERROR = "data/GET_POST_ERROR";
exports.GET_ALL_POSTS = "data/GET_ALL_POSTS";
exports.GET_ALL_POSTS_SECCUESS = "data/GET_ALL_POSTS_SUCCESS";
exports.GET_ALL_POSTS_ERROR = "data/GET_ALL_POSTS_ERROR";
exports.GET_TEMP_POST = "data/GET_TEMP_POST";
exports.GET_TEMP_POST_SUCCESS = "data/GET_TEMP_POST_SUCCESS";
exports.GET_TEMP_POST_ERROR = "data/GET_TEMP_POST_ERROR";
exports.CLEAR_POST = "data/CLEAR_POST";
exports.CLEAR_POST_DATA = "data/CLEAR_POST_DATA";
//액션 생성함수를 선언!
exports.onRequestPosts = PostsUtil_1.createThunk(exports.GET_POSTS, axios_1.default.getPostFromParams);
exports.onRequsetPost = PostsUtil_1.createThunk(exports.GET_POST, axios_1.default.getPostFromPostId);
exports.onRequestAllPosts = PostsUtil_1.createThunk(exports.GET_ALL_POSTS, axios_1.default.getAllPostsItems);
exports.onRequestTemoPost = PostsUtil_1.createThunk(exports.GET_TEMP_POST, axios_1.default.getTempPost);
var initialState = {
    posts: PostsUtil_1.reducerUtil.initial(null),
    post: PostsUtil_1.reducerUtil.initial(null),
    AllPosts: PostsUtil_1.reducerUtil.initial(null),
};
function Posts(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case exports.GET_POSTS:
        case exports.GET_POSTS_SUCCESS:
        case exports.GET_POSTS_ERROR:
            return PostsUtil_1.handleAction(exports.GET_POSTS, "posts", false)(state, action);
        case exports.GET_POST:
        case exports.GET_POST_SUCCESS:
        case exports.GET_POST_ERROR:
            return PostsUtil_1.handleAction(exports.GET_POST, "post", false)(state, action);
        //특정 포스트 볼때 >>>이전 데이터를 가지고있으면 전의 데이터도 렌더링 되는 ㅇ형상떄문에 false로 로딩시 데이터를 유지하지 않게함
        case exports.GET_ALL_POSTS:
        case exports.GET_ALL_POSTS_SECCUESS:
        case exports.GET_ALL_POSTS_ERROR:
            return PostsUtil_1.handleAction(exports.GET_ALL_POSTS, "AllPosts", true)(state, action);
        case exports.CLEAR_POST:
            return __assign(__assign({}, state), { posts: PostsUtil_1.reducerUtil.initial(null) });
        case exports.CLEAR_POST_DATA:
            return __assign(__assign({}, state), { post: PostsUtil_1.reducerUtil.initial(null) });
        default:
            return state;
    }
}
exports.default = Posts;
