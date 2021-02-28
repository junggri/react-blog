import QueryString from "qs";

export interface ITextEditRefObject extends HTMLElement {
   state: any
   editor: any
}

export interface IGetDataFromMode<T> {
   data: T
}

export interface IGetDataFromModeData {
   getDataFromMode: {
      content: string | null
      postdata: {
         content_name: string | null
         detail: string | null
         kindofPosts: string | null
         thumbnail: string | null
         topic: string | null
      }
   }
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