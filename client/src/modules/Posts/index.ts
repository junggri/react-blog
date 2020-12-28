import util from "../../lib/axios";
import { createThunk, handleAction, reducerUtil } from "./lib/PostsUtil";
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

export const DELETE_POST = "data/DELETE_POST";

//액션 생성함수를 선언!

export const onRequestPosts = createThunk(GET_POSTS, util.getPostFromParams);

export const onRequsetPost = createThunk(GET_POST, util.getPostFromPostId);

export const onRequestAllPosts = createThunk(GET_ALL_POSTS, util.getAllPostsItems);


const initialState: IPostInitialState = {
   posts: reducerUtil.initial(),
   post: reducerUtil.initial(),
   AllPosts: reducerUtil.initial(),
};


export default function Posts(state: IPostInitialState = initialState, action: DataAction): IPostInitialState {
   switch (action.type) {
      case GET_POSTS:
      case GET_POSTS_SUCCESS:
      case GET_POSTS_ERROR:
         return handleAction(GET_POSTS, "posts", true)(state, action);
      case GET_POST:
      case GET_POST_SUCCESS:
      case GET_POST_ERROR:
         return handleAction(GET_POST, "post", true)(state, action);
      case GET_ALL_POSTS:
      case GET_ALL_POSTS_SECCUESS:
      case GET_ALL_POSTS_ERROR:
         return handleAction(GET_ALL_POSTS, "AllPosts", true)(state, action);
      case DELETE_POST:
         return {
            ...state,
            AllPosts: {
               data: action.payload,
               loading: false,
               error: null,
            },
         };
      default :
         return state;
   }

}
