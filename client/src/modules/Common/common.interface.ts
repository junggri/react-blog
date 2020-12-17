import { GET_CSRF, GET_CSRF_ERROR, GET_CSRF_SUCCESS, SET_HEIGHT } from "./index";

export interface ICommonState {
   height: number | null
   width: number;
   token: string | null
   loading: boolean
   e: Error | null
}

export interface ICommonAction {
   type: typeof SET_HEIGHT
      | typeof GET_CSRF
      | typeof GET_CSRF_SUCCESS
      | typeof GET_CSRF_ERROR
   payload: number
   e: Error
}

export interface ICommonModuleProps {
   width: number,
   height: number;
   token: string
   setHeight: (heigth: number) => void
   e: Error
}