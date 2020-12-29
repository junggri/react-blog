import { ICommonAction, ICommonState } from "./common.interface";


export const SET_IS_LOGIN = "common/SET_IS_LOGIN";

export const NEW_REQUEST = "common/NEW_REQUEST";

export const onSetIsLogin = (payload: boolean) => ({ type: SET_IS_LOGIN, payload });

export const onNewRequset = (payload: boolean) => ({ type: NEW_REQUEST, payload: payload });

// typescript는 const를 이해하므로(typeof CHECK_GUESTBOOK은 string이 아니라 'CHECK_GUESTBOOK'입니다)
// 액션 이름을 그대로 쓰셔도 됩니다.

//thunk 생성함


const initialState: ICommonState = {
   width: window.screen.width * 0.61,
   login: false,
   loading: false,
   newRequest: true,
   e: null,
};


export default function common(state: ICommonState = initialState, action: ICommonAction): ICommonState {
   switch (action.type) {
      case SET_IS_LOGIN:
         return {
            ...state,
            login: action.payload as boolean,
         };
      case NEW_REQUEST:
         return {
            ...state,
            newRequest: action.payload as boolean,
         };
      default:
         return state;
   }
}