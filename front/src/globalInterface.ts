import QueryString from "qs";
import React from "react";
import { IComment } from "@modules/Comment/cmtInterface";

export interface ITextEditRefObject extends HTMLElement {
   state: any
   editor: any
}

export interface IGetDataFromMode {
   content: string
   id: number
   topic: string
   uid: string
   content_name: string
   detail: string
   thumbnail: null | string,
   file: string
   created: string
   modified: null | string,
   kindofPosts: string
   date: Date
   comment: number
}

export interface IModeFromQueryString {
   identifier: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined
}

export interface IWriteData {
   topic: [{ Tables_in_contents: string }]
   tempPostList: [{
      uid: string,
      topic: string,
      content_name: string
      created: string
      detail: string
      file: string
   }]
}

export interface IThumbNail {
   token: string | null
   onChangeThumbnail: (img: string) => void
}

export interface IThumbnailFetchData {
   state: boolean
   filename: string
}


export interface Ref extends HTMLImageElement {
   src: any
}

export interface ICommentValue {
   value: string
   cmtName: string
   cmtPwd: string
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

export interface ICommentRefObject extends HTMLElement {
   current: any | null
}

export interface ISelectRefObj extends HTMLElement {
   current: any | null
}

export interface ISideBarRefObject extends HTMLElement {
   current: any | null
   type: any
   value: any
}

export interface ICommentProps {
   children?: React.ReactNode
   data: IComment
   topic: string
   postId: string
   token: string
   list: IComment[]
   setNewRequset: (state: boolean) => void
   getComment: (value: string) => void
}

export interface IReplyProps {
   value: string
   user: string
   pwd: string
}

export interface ICommentUserData {
   user: string
   pwd: string
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