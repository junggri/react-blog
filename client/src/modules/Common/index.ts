import util from "../../lib/axios";

const SET_HEIGHT = "common/SET_HEIGHT";

const GET_CSRF = "common/GET_CSRF";
const GET_CSRF_SUCCESS = "common/GET_CSRF_SUCCESS";
const GET_CSRF_ERROR = "common/GET_CSRF_ERROR";


export const onSetHeight = (payload: number) => ({ type: SET_HEIGHT, payload });

export const onGetCsrf = () => ({ type: GET_CSRF });
export const onGetCsrfSuccess = (payload: number) => ({ type: GET_CSRF_SUCCESS, payload });
export const onGetCsrfError = (e: Error) => ({ type: GET_CSRF_ERROR, e });


// typescript는 const를 이해하므로(typeof CHECK_GUESTBOOK은 string이 아니라 'CHECK_GUESTBOOK'입니다)
// 액션 이름을 그대로 쓰셔도 됩니다.


export const onRequestGetCsrf = () => async (dispatch: any, getState: any) => {
   dispatch(onGetCsrf());
   try {
      let { data } = await util.getCSRTtoken();
      dispatch(onGetCsrfSuccess(data));
   } catch (e) {
      dispatch(onGetCsrfError(e));
   }
};


interface ICommonState {
   height: number | null
   width: number;
   token: string | null
   loading: boolean
   e: Error | null
}

interface ICommonAction<T> {
   type: typeof SET_HEIGHT
      | typeof GET_CSRF
      | typeof GET_CSRF_SUCCESS
      | typeof GET_CSRF_ERROR
   payload: T
   e: Error

}

const initialState: ICommonState = {
   height: null,
   width: window.screen.width * 0.70,
   token: null,
   loading: false,
   e: null,
};


export default function common<T>(state: ICommonState = initialState, action: ICommonAction<T>) {
   switch (action.type) {
      case SET_HEIGHT:
         return {
            ...state,
            height: action.payload,
         };
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