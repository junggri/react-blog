import util from "../lib/axios";

const GET_POSTS = "data/GET_POSTS";
const GET_POSTS_SUCCESS = "data/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "data/GET_POSTS_ERROR";

const GET_POST = "data/GET_POST";
const GET_POST_SUCCESS = "data/GET_POST_SUCCESS";
const GET_POST_ERROR = "data/GET_POST_ERROR";


export const onRequest = () => async (dispatch: any) => {
   dispatch({ type: GET_POSTS });
   try {
      const { data } = await util.getContents();
      dispatch({ type: GET_POSTS_SUCCESS, data });
   } catch (e) {
      dispatch({ type: GET_POSTS_ERROR, error: e });
   }
};

let initialState = {
   data: null,
   error: null,
};


interface Action {
   type: string
   [index: string]: any
}

export default function Data(state = initialState, action: Action) {
   switch (action.type) {
      case GET_POSTS:
         return {
            ...state,
         };
      case GET_POSTS_SUCCESS:
         return {
            data: action.data,
         };
      case GET_POSTS_ERROR:
         return {
            ...state,
            error: action.error,
         };
      default :
         return state;
   }

}
