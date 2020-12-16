import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {onRequestPosts, onRequsetPost} from "../modules/Posts";
import {useCallback} from "react";

export default function usePosts() {
    const dispatch = useDispatch();
    const {posts, post} = useSelector((state: RootState) => state.posts);

    const getPosts = useCallback((params: string) => {
        dispatch(onRequestPosts(params));
    }, [dispatch]);

    const getPost = useCallback((topic: string, postsId: string) => {
        dispatch(onRequsetPost(topic, postsId));
    }, [dispatch]);

    return {
        posts,
        post,
        getPosts,
        getPost
    };
}
