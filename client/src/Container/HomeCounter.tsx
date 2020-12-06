import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSetHeight, onSetWidth } from "../modules/Common";
import util from "../lib/axios";
import { onGetContent } from "../modules/Data";


interface State {
   Common: { height: number, width: number }
   Data: { data: Array<any> }
}

const HomeCounter = ({ match }: any) => {
   const dispatch = useDispatch();

   const height = useSelector((state: State) => ({ height: state.Common.height }));
   const width = useSelector((state: State) => ({ width: state.Common.width }));
   const list: any = useSelector((state: State) => ({ data: state.Data.data }));
   const ref = useRef<HTMLDivElement>(null);


   useEffect(() => {
      dispatch(onSetWidth(window.screen.width * 0.70));
      if (ref.current !== null) dispatch(onSetHeight(ref.current.offsetHeight));
      (async () => {
         const { data } = await util.getContentsName();
         dispatch(onGetContent(data));
      })();
   }, []);


   return (
      <div>123</div>
   );
};
export default HomeCounter;