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


export interface ISaveCommentProps {
   value: string
   user: string
   pwd: string
   group: number
   topic: string
   postId: string
   contentName: string
}

export interface ISaveReplyProps {
   value: string
   user: string
   pwd: string
   board: number
   grorp: number
   sorts: number
   depth: number
   topic: string
   postId: string
}

export interface ICommentDeletDataProps {
   board: number
   user: string
   pwd: string
   topic: string
   postsId: string
   deleteArr: number[]
}

export interface IUserData {
   board: number
   user: string
   pwd: string
   postid: string
}