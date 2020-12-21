import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback, useEffect } from "react";
import { onReqTopicsName } from "../modules/Topic";

export default function useTopic() {
   const dispatch = useDispatch();
   const { topic, loading, error } = useSelector((state: RootState) => state.topic);

   const makeOrDeleteAndReqNewTopics = useCallback(() => {
      dispatch(onReqTopicsName());
   }, [dispatch]);

   useEffect(() => {
      if (topic) return;
      dispatch(onReqTopicsName());
   }, [dispatch]);


   return { topic, loading, error, makeOrDeleteAndReqNewTopics };
}