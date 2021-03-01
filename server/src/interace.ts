export interface ITextInitialProps {
   input: {
      identifier: string | undefined
      contentName: string
      content: string
      topicName: string
      kindofPosts: string
      detail: string
      thumbnail: null | string
   }
}

export interface ITextEditSaveProps {
   contentName: string
   content: string
   topicName: string
   kindofPosts: string
   detail: string
   thumbnail: null | string
}

interface ParamsDictionary {
   [index: string]: any
}

export interface IParams extends ParamsDictionary {
   topic: string
   tempId: string
   [index: string]: string
}