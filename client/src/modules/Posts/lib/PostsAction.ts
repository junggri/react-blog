import { CLEAR_POST, GET_ALL_POSTS, GET_ALL_POSTS_ERROR, GET_ALL_POSTS_SECCUESS, GET_POST, GET_POST_ERROR, GET_POST_SUCCESS, GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../index";

export const clearPost = () => ({
   type: CLEAR_POST,
});

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

export const onRequestPost = () => ({
   type: GET_POST,
});

export const onRequestPostSuccess = (payload: any[]) => ({
   type: GET_POST_SUCCESS,
   payload: payload,
});

export const onRequestPostError = (e: Error) => ({
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

