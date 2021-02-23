import { DataAction } from "../posts.interface";

interface IParameter {
   params?: string
   topic?: string
   postsId?: string
   token?: string
}

export const reducerUtil = {
   initial: (initialState = null) => ({
      loading: false,
      data: initialState,
      error: null,
   }),

   loading: (prevState = null) => ({
      loading: true,
      data: prevState,
      error: null,
   }),

   success: (payload: any) => ({
      loading: false,
      data: payload,
      error: null,
   }),

   error: (error: Error) => ({
      loading: false,
      data: null,
      error: error,
   }),
};


export const createThunk = (type: string, cb: any) => {
   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
   return ({ ...parameter }: IParameter) => async (dispatch: any) => {
      dispatch({ type: type });
      try {
         if (type === "data/GET_POSTS") {
            const { data } = await cb(parameter.params);
            dispatch({ type: SUCCESS, payload: data });
         } else if (type === "data/GET_POST") {
            const { data } = await cb(parameter.topic, parameter.postsId);
            dispatch({ type: SUCCESS, payload: data });
         } else {
            const { data } = await cb(parameter.token);
            dispatch({ type: SUCCESS, payload: data });
         }
      } catch (e) {
         console.error(e);
         dispatch({ type: ERROR, error: e });
      }
   };
};


export function handleAction(type: string, key: string, keepData?: boolean) {
   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
   return (state: any, action: DataAction) => {
      switch (action.type) {
         case type:
            return {
               ...state,
               [key]: reducerUtil.loading(keepData ? state[key].data : null),
            };
         case SUCCESS:
            return {
               ...state,
               [key]: reducerUtil.success(action.payload),
            };
         case ERROR:
            return {
               ...state,
               [key]: reducerUtil.error(action.error),
            };
      }
   };
}