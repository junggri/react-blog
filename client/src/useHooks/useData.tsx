import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onSetHeight } from "../modules/Common";
import { useCallback, useEffect } from "react";
import { onRequestPosts } from "../modules/Posts";

export default function usePosts() {
   const dispatch = useDispatch();
   const { width, height } = useSelector((state: RootState) => state.Common);
   const { posts, loading, error } = useSelector((state: RootState) => state.Posts);

   const setHeight = useCallback((height: number) => dispatch(onSetHeight(height)), [height]);

   useEffect(() => {
      dispatch(onRequestPosts());
   }, [dispatch]);

   return {
      width, height, posts, loading, error, setHeight,
   };
}
