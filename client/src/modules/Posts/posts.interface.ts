import { GET_ALL_POSTS, GET_ALL_POSTS_ERROR, GET_ALL_POSTS_SECCUESS, GET_POST, GET_POST_ERROR, GET_POST_SUCCESS, GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "./index";

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
   payload: any[]
   error: Error
}

export interface IPostInitialState {
   posts: IPostsProps<IPostCommonProps>
   post: IPostsProps<IPostCommonProps>
   AllPosts: IPostsProps<IPostCommonProps>
}

//초기 상태

export interface IPostsModuleProps {
   posts: IPostsProps<IPostCommonProps>
   post: IPostProps<IPostItemProps>
   AllPosts: IPostsProps<IPostCommonProps>
   getPosts: (params: string) => void
   getPost: (topic: string, postId: string) => void
}

//이 인터페이스는 api요청 후 셋팅된 데이터의 인터페이스

export interface IPostsProps<T> {
   data: T[] | null
   loading: boolean | null
   error: Error | null
}

export interface IPostProps<U> {
   data: U
   loading: boolean | null
   error: Error | null
}


export interface IPostCommonProps {
   comments: string | null
   uid: string
   content_name: string
   created: string
   file: string,
   detail: string
   kindofPosts: string
   modified: string | null
}

export interface IPostItemProps {
   content: string
   result: IPostCommonProps[]
}

export interface IAllPostsProps {
   data: IPostCommonProps[]
   loading: boolean
   error: Error
}