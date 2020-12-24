import util from "../../lib/axios";
import { ICommonAction, ICommonState } from "./common.interface";


export const GET_CSRF = "common/GET_CSRF";
export const GET_CSRF_SUCCESS = "common/GET_CSRF_SUCCESS";
export const GET_CSRF_ERROR = "common/GET_CSRF_ERROR";


export const onGetCsrf = () => ({ type: GET_CSRF });
export const onGetCsrfSuccess = (payload: string) => ({ type: GET_CSRF_SUCCESS, payload });
export const onGetCsrfError = (e: Error) => ({ type: GET_CSRF_ERROR, e });


// typescript는 const를 이해하므로(typeof CHECK_GUESTBOOK은 string이 아니라 'CHECK_GUESTBOOK'입니다)
// 액션 이름을 그대로 쓰셔도 됩니다.

//thunk 생성함

export const onRequestGetCsrf = () => async (dispatch: any, getState: any) => {
   dispatch(onGetCsrf());
   try {
      const { data } = await util.getCSRTtoken();
      //await keyword를 만나면, promise가 settled될ㄱ떄까지 기다린다 비동기흐름만 정지되고 전체적인 코드는 진행중.
      dispatch(onGetCsrfSuccess(data));
   } catch (e) {
      dispatch(onGetCsrfError(e));
   }
};


const initialState: ICommonState = {
   width: window.screen.width * 0.61,
   token: "",
   login: false,
   loading: false,
   e: null,
};


export default function common(state: ICommonState = initialState, action: ICommonAction): ICommonState {
   switch (action.type) {
      case GET_CSRF:
         return {
            ...state,
            loading: true,
         };
      case GET_CSRF_SUCCESS:
         return {
            ...state,
            token: action.payload,
         };
      case GET_CSRF_ERROR:
         return {
            ...state,
            e: action.e,
         };
      default:
         return state;
   }
}