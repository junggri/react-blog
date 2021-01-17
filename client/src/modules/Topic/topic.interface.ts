import { GET_TOPIC, GET_TOPIC_ERROR, GET_TOPIC_SUCCESS } from "./index";

export interface TopicAction {
   type: typeof GET_TOPIC
      | typeof GET_TOPIC_SUCCESS
      | typeof GET_TOPIC_ERROR
   payload: any[];
   error: Error
}

export interface ITopicinitialState {
   topic: null | any[]
   loading: boolean
   error: Error | null
}

export interface ITopicModuleProps {
   topic: null | any[]
   loading: boolean,
   error: Error | null
   requestTopic: () => void
}