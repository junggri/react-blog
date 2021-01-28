"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axois_config_1 = __importDefault(require("../config/axois.config"));
var util = {
    getCSRTtoken: function () {
        return axois_config_1.default({
            url: "/api/csrf",
            method: "get",
        });
    },
    getGACount: function () {
        return axois_config_1.default({
            url: "/api/google/count",
            method: "get",
        });
    },
    getTopicName: function () {
        return axois_config_1.default({
            url: "/topic/contents/name",
            method: "get",
        });
    },
    savePost: function (data, token) {
        return axois_config_1.default({
            url: "/topic/posts",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    modifyPost: function (data, uid, token) {
        return axois_config_1.default({
            url: "/topic/modify/post",
            method: "post",
            data: { data: data, uid: uid },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    saveTempPost: function (data, uid, token) {
        return axois_config_1.default({
            url: "/topic/temp",
            method: "post",
            data: { data: data, uid: uid },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    temporaryPost: function (data, token) {
        return axois_config_1.default({
            url: "/topic/temp/posts",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    getTempPostFromId: function (id) {
        return axois_config_1.default({
            url: "/topic/temp/" + id,
            method: "get",
        });
    },
    getTempPost: function () {
        return axois_config_1.default({
            url: "/topic/temp/items",
            method: "get",
        });
    },
    getAllPostsItems: function () {
        return axois_config_1.default({
            url: "/topic/posts/items",
            method: "get",
        });
    },
    getPostFromParams: function (parmas) {
        return axois_config_1.default({
            url: encodeURI("/topic/posts/" + parmas),
            method: "get",
        });
    },
    getPostFromPostId: function (topic, postsId) {
        return axois_config_1.default({
            url: "/topic/" + topic + "/posts/" + postsId,
        });
    },
    deleteTopic: function (topicName, token) {
        return axois_config_1.default({
            url: "/topic/:" + topicName,
            method: "post",
            data: { topicName: topicName },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    deletePost: function (uid, topic, token) {
        return axois_config_1.default({
            url: "/topic/posts/item",
            method: "post",
            data: { uid: uid, topic: topic },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    deleteTempPost: function (uid, token) {
        return axois_config_1.default({
            url: "/topic/temp/items",
            method: "post",
            data: { uid: uid },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    makeNewTopic: function (topicName, token) {
        return axois_config_1.default({
            url: "/topic/topicname/" + topicName,
            method: "post",
            data: { newTopic: topicName },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    adminLogin: function (data, token) {
        return axois_config_1.default({
            url: "/admin/login",
            method: "post",
            data: { data: data },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    setJwtToken: function (token) {
        return axois_config_1.default({
            url: "/admin/token",
            method: "post",
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    checkJWTToken: function () {
        return axois_config_1.default({
            url: "/admin/token/jwt",
            method: "get",
        });
    },
};
exports.default = util;
