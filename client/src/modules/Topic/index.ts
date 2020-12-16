import util from "../../lib/axios";

const GET_TOPIC = "topic/GET_TOPIC";
const GET_TOPIC_SUCCESS = "topic/GET_TOPIC_SUCCESS";
const GET_TOPIC_ERROR = "topic/GET_TOPIC_ERROR";

const getTopic = () => ({type: GET_TOPIC});
const getTopicSuccess = (payload: any[]) => ({type: GET_TOPIC_SUCCESS, payload});
const getTopicError = (e: Error) => ({type: GET_TOPIC_ERROR, e});


export const onReqTopicsName = () => async (dispatch: any, getState: any) => {
    dispatch(getTopic());
    try {
        const {data} = await util.getTopicName();
        dispatch(getTopicSuccess(data));
    } catch (e) {
        dispatch(getTopicError(e));
    }
};

interface TopicAction {
    type: typeof GET_TOPIC
        | typeof GET_TOPIC_SUCCESS
        | typeof GET_TOPIC_ERROR
    payload: any[];
    error: Error
}

export interface ITopicinitialState {
    topic: null | any[]
    loading: boolean
    error: Error | null
}

const initialState = {
    topic: null,
    loading: false,
    error: null
};

export default function Topic(state: ITopicinitialState = initialState, action: TopicAction) {
    switch (action.type) {
        case GET_TOPIC:
            return {
                ...state,
                loading: true
            };
        case GET_TOPIC_SUCCESS:
            return {
                ...state,
                topic: action.payload,
                loading: false,
            };
        case GET_TOPIC_ERROR:
            return {
                ...state,
                error: action.error
            };
        default :
            return state;
    }
}