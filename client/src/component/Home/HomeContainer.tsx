import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onRequest } from "../../modules/Data";
import { onSetHeight } from "../../modules/Common";
import Home from "./Home";

interface State {
   Common: { height: number, width: number }
   Data: { data: Array<any>, error: any, loading: boolean }
}

const HomeCounter = ({ match }: any) => {
   const dispatch = useDispatch();
   const { width, height } = useSelector((state: State) => state.Common);
   const { data, error } = useSelector((state: State) => state.Data);
   const setHeight = useCallback((height: number) => dispatch(onSetHeight(height)), [height]);

   useEffect(() => {
      dispatch(onRequest());
   }, [dispatch]);


   if (data === null) return null;
   return (
      <Home width={width} list={data} match={match} height={height} setHeight={setHeight} />
   );
};

export default HomeCounter;