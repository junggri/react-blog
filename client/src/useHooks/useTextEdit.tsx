import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onSetContent, onSetContentName, onSetDetail, onSetKindOfPosts, onSetTopic } from "../modules/TextEditor";

function useTextEdit() {
   const data = useSelector((state: RootState) => state.textEdit);
   const dispatch = useDispatch();

   const setContent = useCallback((content: string) => {
      dispatch(onSetContent(content));
   }, [dispatch]);

   const setContentName = useCallback((contentName: string) => {
      dispatch(onSetContentName(contentName));
   }, [dispatch]);

   const setTopic = useCallback((topic: string) => {
      dispatch(onSetTopic(topic));
   }, [dispatch]);

   const setKindOfPosts = useCallback((kindOf: string) => {
      dispatch(onSetKindOfPosts(kindOf));
   }, [dispatch]);

   const setDetail = useCallback((detail: string) => {
      dispatch(onSetDetail(detail));
   }, [dispatch]);


   return { data, setContent, setContentName, setTopic, setKindOfPosts, setDetail };
}

export default useTextEdit;