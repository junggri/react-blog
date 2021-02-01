import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onRequestAllPosts, onRequestPosts, onRequsetPost } from "../modules/Posts";
import { useCallback } from "react";
import { clearPost, clearPostData } from "../modules/Posts/lib/PostsAction";
import { usePreloader } from "../lib/PreloadContext";

export default function usePosts() {
   const dispatch = useDispatch();
   const { posts, post, AllPosts } = useSelector((state: RootState) => state.posts);

   const getPosts = useCallback((params: string) => {
      dispatch(onRequestPosts({ params: params }));
   }, [dispatch]);

   const getPost = useCallback((topic: string, postsId: string) => {
      dispatch(onRequsetPost({ topic, postsId }));
   }, [dispatch]);

   const getAllPosts = useCallback(() => {
      dispatch(onRequestAllPosts({}));
   }, [dispatch]);

   const onClearPost = useCallback(() => {
      dispatch(clearPost());
   }, [dispatch]);

   const onCleatPostData = useCallback(() => {
      dispatch(clearPostData());
   }, [dispatch]);

   usePreloader(() => dispatch(onRequestAllPosts({})));

   return {
      AllPosts,
      posts,
      post,
      getPosts,
      getPost,
      getAllPosts,
      onClearPost,
      onCleatPostData,
   };
}