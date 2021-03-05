import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { onRequestTopicAndTempPostData } from "@modules/Topic";

export default function useTopic() {
   const dispatch = useDispatch();
   const { textEditorData, loading, error } = useSelector((state: RootState) => state.topic);

   const requestTopicAndTempPostData = useCallback(() => {
      dispatch(onRequestTopicAndTempPostData());
   }, [dispatch]);


   return { textEditorData, loading, error, requestTopicAndTempPostData };
}