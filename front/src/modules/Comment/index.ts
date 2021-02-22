import {ICmtAction, ICommnet, IInitialState} from "./cmtInterface";
import util from "../../lib/axios";
import {GET_ALL_POSTS_ERROR} from "../Posts";

export const GET_COMMENT = "data/GET_COMMENT";
export const GET_COMMENT_SUCCESS = "data/GET_COMMENT_SUCCESS";
export const GET_COMMENT_ERROR = "data/GET_COMMENT_ERROR";


export const getComment = () => ({type: GET_COMMENT});
export const getCommentSuccess = (data: ICommnet) => ({type: GET_COMMENT_SUCCESS, data});
export const getCommentError = (e: Error) => ({type: GET_COMMENT_ERROR, error: e});


const InitialState: IInitialState = {
    list: null,
    loading: false,
    error: null,
};

export const onGetComment = (cmt: string) => async (dispatch: any) => {
    dispatch(getComment());
    try {
        const {data} = await util.getComment(cmt);
        dispatch(getCommentSuccess(data.result));
    } catch (e) {
        dispatch(getCommentError(e));
    }
};


export default function Comment(state: IInitialState = InitialState, action: ICmtAction): IInitialState {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
                loading: true,
            };
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                list: action.data,
            };
        case GET_ALL_POSTS_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}