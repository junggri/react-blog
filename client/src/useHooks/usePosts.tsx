import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onRequestAllPosts, onRequestPosts, onRequsetPost } from "../modules/Posts";
import { useCallback, useEffect } from "react";
import { onDeletePost } from "../modules/Posts/lib/PostsAction";

export default function usePosts() {
   const dispatch = useDispatch();
   const { posts, post, AllPosts } = useSelector((state: RootState) => state.posts);

   const getPosts = useCallback((params: string) => {
      dispatch(onRequestPosts(params));
   }, [dispatch]);

   const getPost = useCallback((topic: string, postsId: string) => {
      dispatch(onRequsetPost(topic, postsId));
   }, [dispatch]);

   const deletePost = useCallback(() => {
      dispatch(onDeletePost());
      dispatch(onRequestAllPosts());
   }, [dispatch]);

   useEffect(() => {
      dispatch(onRequestAllPosts());
   }, [dispatch]);

   return {
      AllPosts,
      posts,
      post,
      getPosts,
      getPost,
      deletePost,
   };
}
