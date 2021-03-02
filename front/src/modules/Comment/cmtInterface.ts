import { GET_COMMENT, GET_COMMENT_SUCCESS } from "./index";
import { GET_ALL_POSTS_ERROR } from "../Posts";

export interface IComment {
   board: number
   bgroup: number
   parent: number
   sorts: number
   depth: number
   cmt: string
   writer: string
   created: string
   pwd: string
   salt: string
}

export interface IInitialState {
   list: null | IComment[],
   loading: boolean
   error: null | Error
}

export interface ICmtAction {
   type:
      typeof GET_COMMENT | typeof GET_COMMENT_SUCCESS | typeof GET_ALL_POSTS_ERROR
   data: IComment[]
   error: Error
}

export interface IUseComment {
   list: IComment[]
   getComment: (cmt_id: string) => void
}