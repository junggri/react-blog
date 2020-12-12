import util from "../../lib/axios";

const GET_POSTS = "data/GET_POSTS";
const GET_POSTS_SUCCESS = "data/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "data/GET_POSTS_ERROR";

const GET_POST = "data/GET_POST";
const GET_POST_SUCCESS = "data/GET_POST_SUCCESS";
const GET_POST_ERROR = "data/GET_POST_ERROR";
//액션타입을 생성

// same;
// const GET_POSTS = "data/GET_POSTS" as const;
// const GET_POSTS_SUCCESS = "data/GET_POSTS_SUCCESS as const" as const;
// const GET_POSTS_ERROR = "data/GET_POSTS_ERROR as const" as const;

// same as above 이거는 근데 as const로 정으ㅣ 되있어야함
// type DataAction =
//    | ReturnType<typeof onRequest>
//    | ReturnType<typeof onRequestSuccuess>
//    | ReturnType<typeof onRequestError>


//액션 생성함수를 선언!
export const onRequest = () => ({
   type: GET_POSTS,
});

export const onRequestSuccuess = (payload: any[]) => ({
   type: GET_POSTS_SUCCESS,
   payload: payload,
});

export const onRequestError = (e: Error) => ({
   type: GET_POSTS_ERROR,
   error: e,
});


//thunk함수
export const onRequestPosts = () => async (dispatch: any, getState: any) => {
   dispatch(onRequest());
   try {
      const { data } = await util.getContents();
      dispatch(onRequestSuccuess(data));
   } catch (e) {
      dispatch(onRequestError(e));
   }
};

interface DataAction {
   type: typeof GET_POSTS | typeof GET_POSTS_SUCCESS | typeof GET_POSTS_ERROR
   payload: any[]
   error: Error
}

let initialState = {
   posts: null,
   loading: null,
   error: null,
};


export default function Posts(state = initialState, action: DataAction) {
   switch (action.type) {
      case GET_POSTS:
         return {
            ...state,
         };
      case GET_POSTS_SUCCESS:
         return {
            ...state,
            posts: action.payload,
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
