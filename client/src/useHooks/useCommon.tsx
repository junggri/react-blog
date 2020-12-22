import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onRequestGetCsrf } from "../modules/Common";

export default function useCommon() {
   const dispatch = useDispatch();
   const { width, token, loading, e } = useSelector((state: RootState) => state.common);


   useEffect(() => {
      dispatch(onRequestGetCsrf());
   }, [dispatch]);

   return {
      width,
      token,
      loading,
      e,
   };
}