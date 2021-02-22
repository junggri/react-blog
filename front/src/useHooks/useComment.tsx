import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onGetComment } from "../modules/Comment";

export default function useComment() {
   const { list, loading, error } = useSelector((state: RootState) => state.comment);
   const dispatch = useDispatch();

   const getComment = useCallback((cmt_id: string) => {
      dispatch(onGetComment(cmt_id));
   }, [dispatch]);

   return { list, getComment };
}