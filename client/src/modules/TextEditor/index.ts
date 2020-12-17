// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
import { EditorAction, ITextInitialProps } from "./textEdit.interface";

const SET_CONTENT = "textEdit/SET_CONTENT" as const;
const SET_CONTENT_NAME = "textEdit/SET_CONTENT_NAME" as const;
const SET_TOPIC = "textEdit/SET_TOPIC" as const;
const SET_KIND_OF_POSTS = "textEdit/SET_KIND_OF_POSTS" as const;
const SET_DETAIL = "textEdit/SET_DETAIL" as const;


export const onSetContent = (content: string) => ({ type: SET_CONTENT, payload: content });
export const onSetContentName = (contentName: string) => ({ type: SET_CONTENT_NAME, payload: contentName });
export const onSetTopic = (topic: string) => ({ type: SET_TOPIC, payload: topic });
export const onSetKindOfPosts = (kindOfPosts: string) => ({ type: SET_KIND_OF_POSTS, payload: kindOfPosts });
export const onSetDetail = (detail: string) => ({ type: SET_DETAIL, payload: detail });


const initialState: ITextInitialProps = {
   contentName: "",
   content: "",
   topicName: "",
   kindOfPosts: "",
   detail: "",
};


function TextEditor(state: ITextInitialProps = initialState, action: EditorAction): ITextInitialProps {
   switch (action.type) {
      case SET_CONTENT:
         return {
            ...state,
            content: action.payload,
         };
      case SET_CONTENT_NAME:
         return {
            ...state,
            contentName: action.payload,
         };
      case SET_TOPIC:
         return {
            ...state,
            topicName: action.payload,
         };
      case SET_KIND_OF_POSTS:
         return {
            ...state,
            kindOfPosts: action.payload,
         };
      case SET_DETAIL:
         return {
            ...state,
            detail: action.payload,
         };
      default:
         return state;
   }

}

export default TextEditor;