import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useEffect } from "react";
import { onRequestPosts } from "../modules/Posts";

export default function usePosts() {
   const dispatch = useDispatch();
   const { posts, loading, error } = useSelector((state: RootState) => state.posts);


   useEffect(() => {
      dispatch(onRequestPosts());
   }, [dispatch]);

   return {
      posts, loading, error,
   };
}
