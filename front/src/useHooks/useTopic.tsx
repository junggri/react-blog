import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { onRequestTopicAndTempPostData } from "../modules/Topic";
import { IWriteData } from "../modules/Topic/topic.interface";

export default function useTopic() {
   const dispatch = useDispatch();
   const { writeData, loading, error } = useSelector((state: RootState) => state.topic);
   const { tableName, tempPostList }: IWriteData = writeData;

   const requestTopicAndTempPostData = useCallback((token: string) => {
      dispatch(onRequestTopicAndTempPostData(token));
   }, [dispatch]);


   return { tableName, tempPostList, loading, error, requestTopicAndTempPostData };
}