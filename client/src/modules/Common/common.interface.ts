import { NEW_REQUEST, SET_IS_LOGIN } from "./index";

export interface ICommonState {
   width: number;
   login: boolean
   loading: boolean
   newRequest: boolean
   e: Error | null
}

export interface ICommonAction {
   type:
      | typeof SET_IS_LOGIN
      | typeof NEW_REQUEST
   payload: string | boolean
   e: Error
}

export interface ICommonModuleProps {
   width: number,
   login: boolean
   loading: boolean
   onSetLogin: (state: boolean) => void
   newRequest: boolean
   setNewRequset: (state: boolean) => void
   e: Error | null
}
