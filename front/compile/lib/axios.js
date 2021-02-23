"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_config_1 = __importDefault(require("../config/axios.config"));
var URL = process.env.NODE_ENV === "development" ? "http://localhost:5000/graphql" : "https://junggri.com/graphql";
function aixosCommonObj(query, token) {
    return {
        url: URL,
        method: "post",
        headers: { "X-XSRF-TOKEN": token },
        data: {
            query: query,
        },
    };
}
var util = {
    graphql: function (token) {
        return axios_config_1.default({
            url: URL,
            method: "post",
            headers: { "X-XSRF-TOKEN": token },
            data: {
                query: "\n               query {\n                    name\n                    Allposts\n               }\n               ",
            },
        });
    },
    getCSRTtoken: function () {
        return axios_config_1.default({
            url: "/api/csrf",
        });
    },
    getGACount: function () {
        return axios_config_1.default({
            url: "/api/google/count",
            method: "get",
        });
    },
    saveThumbnail: function (token, data) {
        return axios_config_1.default({
            url: "/topic/thumbnail",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    getTopicName: function () {
        return axios_config_1.default({
            url: "/topic/contents/name",
            method: "get",
        });
    },
    savePost: function (data, token) {
        return axios_config_1.default({
            url: "/topic/posts",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    modifyPost: function (data, uid, token) {
        return axios_config_1.default({
            url: "/topic/modify/post",
            method: "post",
            data: { data: data, uid: uid },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    saveTempPost: function (data, uid, token) {
        return axios_config_1.default({
            url: "/topic/temp",
            method: "post",
            data: { data: data, uid: uid },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    temporaryPost: function (data, token, id) {
        return axios_config_1.default({
            url: "/topic/temp/posts",
            method: "post",
            data: { data: data, id: id },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    getTempPostFromId: function (id) {
        return axios_config_1.default({
            url: "/topic/temp/" + id,
            method: "get",
        });
    },
    getTempPost: function () {
        return axios_config_1.default({
            url: "/topic/temp/items",
            method: "get",
        });
    },
    getAllPostsItems: function (token) {
        return axios_config_1.default({
            url: URL,
            method: "post",
            headers: { "X-XSRF-TOKEN": token },
            data: {
                query: "\n         query {\n              Allposts{\n                 id comment uid content_name date created file detail thumbnail kindOfPosts modified topic\n              }\n         }\n         ",
            },
        });
    },
    getPostFromParams: function (parmas) {
        return axios_config_1.default({
            url: "/topic/posts/" + encodeURIComponent(parmas),
            method: "get",
        });
    },
    getPostFromPostId: function (topic, postsId) {
        return axios_config_1.default({
            url: "/topic/" + encodeURIComponent(topic) + "/posts/" + postsId,
        });
    },
    deleteTopic: function (topicName, token) {
        return axios_config_1.default({
            url: "/topic/:" + topicName,
            method: "post",
            data: { topicName: topicName },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    deletePost: function (uid, topic, token) {
        return axios_config_1.default({
            url: "/topic/posts/item",
            method: "post",
            data: { uid: uid, topic: topic },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    deleteTempPost: function (uid, token) {
        return axios_config_1.default({
            url: "/topic/temp/items",
            method: "post",
            data: { uid: uid },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    makeNewTopic: function (topicName, token) {
        return axios_config_1.default({
            url: "/topic/topicname/" + topicName,
            method: "post",
            data: { newTopic: topicName },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    adminLogin: function (data, token) {
        return axios_config_1.default({
            url: "/admin/login",
            method: "post",
            data: { data: data },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    setJwtToken: function (token) {
        return axios_config_1.default({
            url: "/admin/token",
            method: "post",
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    checkJWTToken: function () {
        return axios_config_1.default({
            url: "/admin/token/jwt",
            method: "get",
        });
    },
    getComment: function (postid) {
        return axios_config_1.default({
            url: "/api/item/" + postid + "/comment",
        });
    },
    saveComment: function (postname, content, grp, topic, postid, user, pwd, token) {
        return axios_config_1.default({
            url: "/api/comment",
            method: "post",
            data: { postname: postname, content: content, grp: grp, topic: topic, postid: postid, user: user, pwd: pwd },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    saveReply: function (content, bn, grp, sorts, depth, topic, postid, user, pwd, token) {
        return axios_config_1.default({
            url: "/api/reply",
            method: "post",
            data: { content: content, bn: bn, grp: grp, sorts: sorts, depth: depth, topic: topic, postid: postid, user: user, pwd: pwd },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    deleteComment: function (writer, pwd, number, topic, postId, deleteArr, token) {
        return axios_config_1.default({
            url: "/api/comment/items",
            method: "post",
            data: { writer: writer, pwd: pwd, number: number, topic: topic, postId: postId, deleteArr: deleteArr },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
};
exports.default = util;
