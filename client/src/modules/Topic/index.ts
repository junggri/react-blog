import util from "../../lib/axios";
import { ITopicinitialState, TopicAction } from "./topic.interface";

export const GET_TOPIC = "topic/GET_TOPIC";
export const GET_TOPIC_SUCCESS = "topic/GET_TOPIC_SUCCESS";
export const GET_TOPIC_ERROR = "topic/GET_TOPIC_ERROR";


export const getTopic = () => ({ type: GET_TOPIC });
export const getTopicSuccess = (payload: any[]) => ({ type: GET_TOPIC_SUCCESS, payload });
export const getTopicError = (e: Error) => ({ type: GET_TOPIC_ERROR, e });


export const onReqTopicsName = () => async (dispatch: any, getState: any) => {
   dispatch(getTopic());
   try {
      const { data } = await util.getTopicName();
      dispatch(getTopicSuccess(data));
   } catch (e) {
      dispatch(getTopicError(e));
   }
};


const initialState = {
   topic: null,
   loading: false,
   error: null,
};

export default function Topic(state: ITopicinitialState = initialState, action: TopicAction) {
   switch (action.type) {
      case GET_TOPIC:
         return {
            ...state,
            loading: true,
         };
      case GET_TOPIC_SUCCESS:
         return {
            ...state,
            topic: action.payload,
            loading: false,
         };
      case GET_TOPIC_ERROR:
         return {
            ...state,
            error: action.error,
         };
      default :
         return state;
   }
}