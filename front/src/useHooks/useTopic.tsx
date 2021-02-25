import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { onRequestTopicNames } from "../modules/Topic";

export default function useTopic() {
   const dispatch = useDispatch();
   const { topic, loading, error } = useSelector((state: RootState) => state.topic);

   const requestTopic = useCallback((token: string) => {
      dispatch(onRequestTopicNames(token));
   }, [dispatch]);


   return { topic, loading, error, requestTopic };
}