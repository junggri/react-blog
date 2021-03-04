"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Posts_1 = require("@modules/Posts");
var react_1 = require("react");
var PostsAction_1 = require("@modules/Posts/lib/PostsAction");
function usePosts() {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.posts; }), posts = _a.posts, post = _a.post, AllPosts = _a.AllPosts;
    var getPosts = react_1.useCallback(function (params) {
        dispatch(Posts_1.onRequestPosts({ params: params }));
    }, [dispatch]);
    var getPost = react_1.useCallback(function (topic, postsId) {
        dispatch(Posts_1.onRequsetPost({ topic: topic, postsId: postsId }));
    }, [dispatch]);
    var getAllPosts = react_1.useCallback(function () {
        dispatch(Posts_1.onRequestAllPosts({}));
    }, [dispatch]);
    var onClearPost = react_1.useCallback(function () {
        dispatch(PostsAction_1.clearPost());
    }, [dispatch]);
    var onCleatPostData = react_1.useCallback(function () {
        dispatch(PostsAction_1.clearPostData());
    }, [dispatch]);
    return {
        AllPosts: AllPosts,
        posts: posts,
        post: post,
        getPosts: getPosts,
        getPost: getPost,
        getAllPosts: getAllPosts,
        onClearPost: onClearPost,
        onCleatPostData: onCleatPostData,
    };
}
exports.default = usePosts;
