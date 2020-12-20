import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onRequestGetCsrf } from "../modules/Common";

export default function useCommon() {
   const dispatch = useDispatch();
   const { width, height, token, loading, e } = useSelector((state: RootState) => state.common);


   useEffect(() => {
      console.log("effect common");
      dispatch(onRequestGetCsrf());
   }, [dispatch]);

   return {
      width,
      height,
      token,
      loading,
      e,
   };
}