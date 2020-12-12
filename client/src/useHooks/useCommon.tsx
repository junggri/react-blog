import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onRequestGetCsrf, onSetHeight } from "../modules/Common";

export default function useCommon() {
   const dispatch = useDispatch();
   const { width, height, token, loading, e } = useSelector((state: RootState) => state.common);


   const setHeight = useCallback((height: number) => dispatch(onSetHeight(height)), [height]);

   useEffect(() => {
      dispatch(onRequestGetCsrf());
   }, [dispatch]);

   return {
      setHeight,
      width,
      height,
      token,
      loading,
      e,
   };
}