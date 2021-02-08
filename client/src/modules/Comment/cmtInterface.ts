import { GET_COMMENT, GET_COMMENT_SUCCESS } from "./index";
import { GET_ALL_POSTS_ERROR } from "../Posts";

export interface ICommnet {
   board: number
   bgroup: number
   parent: number
   sorts: number
   depth: number
   cmt: string
}

export interface IInitialState {
   list: null | ICommnet[],
   loading: boolean
   error: null | Error
}

export interface ICmtAction {
   type:
      typeof GET_COMMENT | typeof GET_COMMENT_SUCCESS | typeof GET_ALL_POSTS_ERROR
   data: ICommnet[]
   error: Error
}

export interface IUseComment {
   list: ICommnet[]
   getComment: (cmt_id: string) => void
}