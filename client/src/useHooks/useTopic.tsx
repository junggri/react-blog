import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {useEffect} from "react";
import {onReqTopicsName} from "../modules/Topic";

export default function useTopic() {
    const dispatch = useDispatch();

    const {topic, loading, error} = useSelector((state: RootState) => state.topic);

    useEffect(() => {
        dispatch(onReqTopicsName());
    }, [dispatch]);

    return {topic, loading, error};

}