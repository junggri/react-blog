import util from "../../lib/axios";
import { initial } from "./lib/PostsUtil";
import { DataAction, IPostInitialState } from "./posts.interface";

export const GET_POSTS = "data/GET_POSTS";
export const GET_POSTS_SUCCESS = "data/GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "data/GET_POSTS_ERROR";

export const GET_POST = "data/GET_POST";
export const GET_POST_SUCCESS = "data/GET_POST_SUCCESS";
export const GET_POST_ERROR = "data/GET_POST_ERROR";

export const GET_ALL_POSTS = "data/GET_ALL_POSTS";
export const GET_ALL_POSTS_SECCUESS = "data/GET_ALL_POSTS_SUCCESS";
export const GET_ALL_POSTS_ERROR = "data/GET_ALL_POSTS_ERROR";

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

const onRequestPost = () => ({
   type: GET_POST,
});

const onRequestPostSuccess = (payload: any[]) => ({
   type: GET_POST_SUCCESS,
   payload: payload,
});

const onRequestPostError = (e: Error) => ({
   type: GET_POST_ERROR,
   error: e,
});

export const onRequsetAllPosts = () => ({
   type: GET_ALL_POSTS,
});

export const onRequsetAllPostsSuccess = (payload: any[]) => ({
   type: GET_ALL_POSTS_SECCUESS,
   payload: payload,
});

export const onRequestAllPostsError = (e: Error) => ({
   type: GET_ALL_POSTS_ERROR,
   error: e,
});

export const onRequestPosts = (params: string) => async (dispatch: any, getState: any) => {
   dispatch(onRequest());
   try {
      const { data } = await util.getPostFromParams(params);
      dispatch(onRequestSuccuess(data));
   } catch (e) {
      dispatch(onRequestError(e));
   }
};

export const onRequsetPost = (topic: string, postsId: string) => async (dispatch: any) => {
   dispatch(onRequestPost());
   try {
      const { data } = await util.getPostFromPostId({ topic, postsId });
      dispatch(onRequestPostSuccess(data));
   } catch (e) {
      dispatch(onRequestPostError(e));
   }
};

export const onRequestAllPosts = () => async (dispatch: any) => {
   dispatch(onRequsetAllPosts());
   try {
      const { data } = await util.getAllPostsItems();
      dispatch(onRequsetAllPostsSuccess(data));
   } catch (e) {
      dispatch(onRequestAllPostsError(e));
   }
};

const initialState: IPostInitialState = {
   posts: initial.PostsInit(),
   post: initial.PostInit(),
   AllPosts: initial.AllPosts(),
};


export default function Posts(state: IPostInitialState = initialState, action: DataAction): IPostInitialState {
   switch (action.type) {
      case GET_POSTS:
         return {
            ...state,
            posts: {
               data: null,
               loading: true,
               error: action.error,
            },
         };
      case GET_POSTS_SUCCESS:
         return {
            ...state,
            posts: {
               data: action.payload,
               loading: false,
               error: null,
            },
         };
      case GET_POSTS_ERROR:
         return {
            ...state,
            posts: {
               data: null,
               loading: false,
               error: null,
            },
         };
      case GET_POST:
         return {
            ...state,
            post: {
               data: null,
               loading: true,
               error: null,
            },
         };
      case GET_POST_SUCCESS:
         return {
            ...state,
            post: {
               data: action.payload,
               loading: false,
               error: null,
            },
         };
      case GET_POST_ERROR:
         return {
            ...state,
            post: {
               data: null,
               loading: false,
               error: action.error,
            },
         };
      case GET_ALL_POSTS:
         return {
            ...state,
            AllPosts: {
               data: null,
               loading: true,
               error: null,
            },
         };
      case GET_ALL_POSTS_SECCUESS:
         return {
            ...state,
            AllPosts: {
               data: action.payload,
               loading: false,
               error: null,
            },
         };
      case GET_ALL_POSTS_ERROR:
         return {
            ...state,
            AllPosts: {
               data: null,
               loading: false,
               error: action.error,
            },
         };
      default :
         return state;
   }

}
