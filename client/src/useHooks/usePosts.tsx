import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onRequestAllPosts, onRequestPosts, onRequsetPost } from "../modules/Posts";
import { useCallback } from "react";
import { clearPost, onDeletePost } from "../modules/Posts/lib/PostsAction";
import { IPostCommonProps } from "../modules/Posts/posts.interface";

export default function usePosts() {
   const dispatch = useDispatch();
   const { posts, post, AllPosts } = useSelector((state: RootState) => state.posts);

   const getPosts = useCallback((params: string) => {
      dispatch(onRequestPosts({ params }));
   }, [dispatch]);

   const getPost = useCallback((topic: string, postsId: string) => {
      dispatch(onRequsetPost({ topic, postsId }));
   }, [dispatch]);

   const getAllPosts = useCallback(() => {
      dispatch(onRequestAllPosts({}));
   }, [dispatch]);

   const deletePost = useCallback((posts: IPostCommonProps[]) => {
      dispatch(onDeletePost(posts));
   }, [dispatch]);

   const onClearPost = useCallback(() => {
      dispatch(clearPost());
   }, [dispatch]);

   return {
      AllPosts,
      posts,
      post,
      getPosts,
      getPost,
      deletePost,
      getAllPosts,
      onClearPost,
   };
}