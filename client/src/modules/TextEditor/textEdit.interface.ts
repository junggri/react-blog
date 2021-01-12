import { onSetContent, onSetContentName, onSetDetail, onSetKindOfPosts, onSetTempData, onSetTopic } from "./index";

export interface ITextInitialProps {
   contentName: string
   content: string
   topicName: string
   kindOfPosts: string
   detail: string
}

export type EditorAction =
   | ReturnType<typeof onSetContent>
   | ReturnType<typeof onSetContentName>
   | ReturnType<typeof onSetTopic>
   | ReturnType<typeof onSetKindOfPosts>
   | ReturnType<typeof onSetDetail>
   | ReturnType<typeof onSetTempData>


export interface ITextEditModuleProps {
   data: ITextInitialProps
   setContent: (payload: string) => void
   setContentName: (payload: string) => void
   setTopic: (payload: string) => void
   setKindOfPosts: (payload: string) => void
   setDetail: (payload: string) => void
   setTempData: (payload: any) => void
}