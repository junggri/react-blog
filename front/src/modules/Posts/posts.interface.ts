import {
   CLEAR_POST,
   CLEAR_POST_DATA,
   GET_ALL_POSTS,
   GET_ALL_POSTS_ERROR,
   GET_ALL_POSTS_SECCUESS,
   GET_POST,
   GET_POST_ERROR,
   GET_POST_SUCCESS,
   GET_POSTS,
   GET_POSTS_ERROR,
   GET_POSTS_SUCCESS,
} from "./index";

export interface DataAction {
   type: typeof GET_POSTS
      | typeof GET_POSTS_SUCCESS
      | typeof GET_POSTS_ERROR
      | typeof GET_POST
      | typeof GET_POST_SUCCESS
      | typeof GET_POST_ERROR
      | typeof GET_ALL_POSTS
      | typeof GET_ALL_POSTS_SECCUESS
      | typeof GET_ALL_POSTS_ERROR
      | typeof CLEAR_POST
      | typeof CLEAR_POST_DATA

   payload: any
   error: Error

}

export interface IPostCommonProps {
   id: number
   comment: number | null
   uid: string
   content_name: string
   date: string
   created: string
   file: string,
   detail: string
   thumbnail: string
   kindofPosts: string
   modified: string | null
   topic: string
}

export interface IPostInitialState {
   posts: IPostsProps
   post: IPostProps<IPostDataProps>
   AllPosts: IAllPost
}

export interface IAllPost {
   data: [IPostCommonProps] | null
   loading: boolean
   error: Error | null
}

export interface IPostsProps {
   data: IPostCommonProps[] | null
   loading: boolean
   error: Error | null
}

//초기 상태

export interface IPostProps<T> {
   data: T | null
   loading: boolean
   error: Error | null
}


export interface IPostDataProps extends IPostCommonProps {
   content: string
}

export interface IPostsModuleProps {
   posts: IPostsProps
   post: IPostProps<IPostDataProps>
   AllPosts: IAllPost
   getPosts: (params: string) => void
   getPost: (topic: string, postId: string) => void
   getAllPosts: () => void
   onClearPost: () => void
   onCleatPostData: () => void
}

//이 인터페이스는 api요청 후 셋팅된 데이터의 인터페이스