"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequestAllPostsError = exports.onRequsetAllPostsSuccess = exports.onRequsetAllPosts = exports.onRequestPostError = exports.onRequestPostSuccess = exports.onRequestPost = exports.onRequestError = exports.onRequestSuccuess = exports.onRequest = exports.clearPostData = exports.clearPost = void 0;
var index_1 = require("../index");
var clearPost = function () { return ({
    type: index_1.CLEAR_POST,
}); };
exports.clearPost = clearPost;
var clearPostData = function () { return ({
    type: index_1.CLEAR_POST_DATA,
}); };
exports.clearPostData = clearPostData;
var onRequest = function () { return ({
    type: index_1.GET_POSTS,
}); };
exports.onRequest = onRequest;
var onRequestSuccuess = function (payload) { return ({
    type: index_1.GET_POSTS_SUCCESS,
    payload: payload,
}); };
exports.onRequestSuccuess = onRequestSuccuess;
var onRequestError = function (e) { return ({
    type: index_1.GET_POSTS_ERROR,
    error: e,
}); };
exports.onRequestError = onRequestError;
var onRequestPost = function () { return ({
    type: index_1.GET_POST,
}); };
exports.onRequestPost = onRequestPost;
var onRequestPostSuccess = function (payload) { return ({
    type: index_1.GET_POST_SUCCESS,
    payload: payload,
}); };
exports.onRequestPostSuccess = onRequestPostSuccess;
var onRequestPostError = function (e) { return ({
    type: index_1.GET_POST_ERROR,
    error: e,
}); };
exports.onRequestPostError = onRequestPostError;
var onRequsetAllPosts = function () { return ({
    type: index_1.GET_ALL_POSTS,
}); };
exports.onRequsetAllPosts = onRequsetAllPosts;
var onRequsetAllPostsSuccess = function (payload) { return ({
    type: index_1.GET_ALL_POSTS_SECCUESS,
    payload: payload,
}); };
exports.onRequsetAllPostsSuccess = onRequsetAllPostsSuccess;
var onRequestAllPostsError = function (e) { return ({
    type: index_1.GET_ALL_POSTS_ERROR,
    error: e,
}); };
exports.onRequestAllPostsError = onRequestAllPostsError;
