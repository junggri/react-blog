import { GET_TOPIC, GET_TOPIC_ERROR, GET_TOPIC_SUCCESS } from "./index";

export interface TopicAction {
   type: typeof GET_TOPIC
      | typeof GET_TOPIC_SUCCESS
      | typeof GET_TOPIC_ERROR
   payload: any[];
   error: Error
}

export interface IWriteData {
   tables: [{ Tables_in_contents: string }] | null
   posts: [{
      uid: string,
      topic: string,
      created: string
      content_name: string
      detail: string
      file: string
   }] | null
}

export interface ITopicinitialState {
   textEditorData: IWriteData | null
   loading: boolean
   error: Error | null
}

export interface ITopicModuleProps {
   textEditorData: IWriteData | null
   loading: boolean,
   error: Error | null
   requestTopicAndTempPostData: () => void
}