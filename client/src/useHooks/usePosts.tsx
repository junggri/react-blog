import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onRequestAllPosts, onRequestPosts, onRequsetPost } from "../modules/Posts";
import { useCallback, useEffect } from "react";

export default function usePosts() {
   const dispatch = useDispatch();
   const { posts, post, AllPosts } = useSelector((state: RootState) => state.posts);

   const getPosts = useCallback((params: string) => {
      dispatch(onRequestPosts(params));
   }, [dispatch]);

   const getPost = useCallback((topic: string, postsId: string) => {
      dispatch(onRequsetPost(topic, postsId));
   }, [dispatch]);

   useEffect(() => {
      if (AllPosts.data) return;
      dispatch(onRequestAllPosts());
   }, [dispatch]);

   return {
      AllPosts,
      posts,
      post,
      getPosts,
      getPost,
   };
}
