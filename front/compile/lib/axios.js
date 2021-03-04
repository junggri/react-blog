"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_config_1 = __importDefault(require("@config/axios.config"));
var URL = process.env.REACT_APP_GRAPHQL_URL;
console.log(URL);
function axiosCommonObj(query, token) {
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
    getDataFromMode: function (token, identifier, topic) {
        var option = axiosCommonObj("\n         query{\n            getDataFromMode(identifier:\"" + identifier + "\",topic:\"" + topic + "\"){\n               content\n               postdata{\n                  content_name\n                  detail\n                  kindofPosts\n                  topic\n                  thumbnail\n               }\n            }\n         }\n      ", token);
        return axios_config_1.default(option);
    },
    getTopicAndTempPostsData: function (token) {
        var option = axiosCommonObj("\n               query {\n                    getTextEditorData{\n                        tableName{\n                           Tables_in_contents\n                        }\n                        tempPostList{\n                           uid\n                           topic\n                           content_name\n                           created\n                           detail\n                           file\n                        }\n                    }\n               }\n               ", token);
        return axios_config_1.default(option);
    },
    savePost: function (_a) {
        var data = _a.data, csrf = _a.csrf;
        return axios_config_1.default({
            url: "/topic/post",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": csrf },
        });
    },
    saveTemporaryPost: function (data, csrf, temp_id) {
        return axios_config_1.default({
            "url": "/topic/temp",
            method: "post",
            data: { data: data, uid: temp_id },
            headers: { "X-XSRF-TOKEN": csrf },
        });
    },
    deleteTemporaryPostAndSavePost: function (data, identifier, token) {
        return axios_config_1.default({
            url: "/topic/" + data.topicName + "/temps/" + identifier,
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    updatePost: function (data, identifier, token) {
        return axios_config_1.default({
            "url": "topic/" + data.topicName + "/posts/" + identifier,
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
        // const option = axiosCommonObj(`
    },
    createTopic: function (topic, token) {
        var option = axiosCommonObj("\n         mutation{\n            createTopic(topic:\"" + topic + "\"){\n               state\n            }\n         }\n      ", token);
        return axios_config_1.default(option);
    },
    deletePost: function (topic, identifier, token) {
        var option = axiosCommonObj("\n         mutation{\n            deletePost(topic:\"" + topic + "\", identifier:\"" + identifier + "\"){\n               state\n            }\n         }\n      ", token);
        return axios_config_1.default(option);
    },
    deleteTopic: function (topic, token) {
        var option = axiosCommonObj("\n         mutation {\n            deleteTopic(topic:\"" + topic + "\"){\n               state\n            }\n         }\n      ", token);
        return axios_config_1.default(option);
    },
    deleteTemporaryPost: function (post_id, token) {
        var option = axiosCommonObj("\n         mutation{\n            deleteTemporaryPost(identifier:\"" + post_id + "\"){\n               state\n            }\n         }\n      ", token);
        return axios_config_1.default(option);
    },
    getCSRTtoken: function () {
        return axios_config_1.default({
            url: "/api/csrf",
        });
    },
    getAllPosts: function () {
        return axios_config_1.default({
            url: "/topic/posts/items",
            method: "get",
        });
    },
    getPost: function (topic, postsId) {
        return axios_config_1.default({
            url: "/topic/preload/" + encodeURIComponent(topic) + "/posts/" + postsId,
            method: "get",
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
    getComment: function (postid) {
        return axios_config_1.default({
            url: "/api/comments/comment/posts/" + postid,
        });
    },
    saveComment: function (data, token) {
        return axios_config_1.default({
            url: "/api/comments",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    saveReply: function (data, token) {
        return axios_config_1.default({
            url: "/api/reply",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    deleteComment: function (data, token) {
        return axios_config_1.default({
            url: "/api/comments/items",
            method: "post",
            data: data,
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    // deleteComment(writer: string, pwd: string, number: string, topic: string, postId: string, deleteArr: number[], token: string) {
    //    return instance({
    //       url: "/api/comment/items",
    //       method: "post",
    //       data: { writer, pwd, number, topic, postId, deleteArr },
    //       headers: { "X-XSRF-TOKEN": token },
    //    });
    // },
    ///////t사용하는 것들///////t사용하는 것들///////t사용하는 것들////
    getTopicName: function () {
        return axios_config_1.default({
            url: "/topic/contents/name",
            method: "get",
        });
    },
    // savePost(data: ITextInitialProps, token: string) {
    //    return instance({
    //       url: "/topic/posts",
    //       method: "post",
    //       data: data,
    //       headers: { "X-XSRF-TOKEN": token },
    //    });
    // },
    modifyPost: function (data, uid, token) {
        return axios_config_1.default({
            url: "/topic/modify/post",
            method: "post",
            data: { data: data, uid: uid },
            headers: { "X-XSRF-TOKEN": token },
        });
    },
    // saveTempPost(data: ITextInitialProps, uid: string, token: string) {
    //    return instance({
    //       url: "/topic/temp",
    //       method: "post",
    //       data: { data: data, uid: uid },
    //       headers: { "X-XSRF-TOKEN": token },
    //    });
    // },
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
    // getTempPost() {
    //    return instance({
    //       url: "/topic/temp/items",
    //       method: "get",
    //    });
    // },
    getPostFromParams: function (parmas) {
        return axios_config_1.default({
            url: "/topic/posts/" + encodeURIComponent(parmas),
            method: "get",
        });
    },
    // deleteTopic(topicName: string, token: string) {
    //    return instance({
    //       url: `/topic/:${topicName}`,
    //       method: "post",
    //       data: { topicName: topicName },
    //       headers: { "X-XSRF-TOKEN": token },
    //    });
    // },
    // deletePost(uid: string, topic: string, token: string) {
    //    return instance({
    //       url: `/topic/posts/item`,
    //       method: "post",
    //       data: { uid: uid, topic: topic },
    //       headers: { "X-XSRF-TOKEN": token },
    //    });
    // },
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
};
exports.default = util;
