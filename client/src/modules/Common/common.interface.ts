import { GET_CSRF, GET_CSRF_ERROR, GET_CSRF_SUCCESS } from "./index";

export interface ICommonState {
   width: number;
   token: string
   login: boolean
   loading: boolean
   e: Error | null
}

export interface ICommonAction {
   type:
      | typeof GET_CSRF
      | typeof GET_CSRF_SUCCESS
      | typeof GET_CSRF_ERROR
   payload: string
   e: Error
}

export interface ICommonModuleProps {
   width: number,
   token: string
   loading: boolean
   e: Error | null
}
