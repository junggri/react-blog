import { GET_CSRF, GET_CSRF_ERROR, GET_CSRF_SUCCESS } from "./index";

export interface ICommonState {
   width: number;
   token: string | null
   loading: boolean
   e: Error | null
}

export interface ICommonAction {
   type:
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
   e: Error
}