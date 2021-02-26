import { GET_TOPIC, GET_TOPIC_ERROR, GET_TOPIC_SUCCESS } from "./index";

export interface TopicAction {
   type: typeof GET_TOPIC
      | typeof GET_TOPIC_SUCCESS
      | typeof GET_TOPIC_ERROR
   payload: any[];
   error: Error
}

export interface IWriteData {
   tableName: [{ Tables_in_contents: string }] | null
   tempPostList: [{
      uid: string,
      topic: string,
      created: string
      content_name: string
      detail: string
      file: string
   }] | null
}

export interface ITopicinitialState {
   writeData: IWriteData
   loading: boolean
   error: Error | null
}

export interface ITopicModuleProps extends IWriteData {
   loading: boolean,
   error: Error | null
   requestTopicAndTempPostData: (token: string) => void
}