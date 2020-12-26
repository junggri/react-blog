import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onSetIsLogin } from "../modules/Common";

export default function useCommon() {

   const dispatch = useDispatch();

   const { width, token, login, loading, e } = useSelector((state: RootState) => state.common);

   const onSetLogin = useCallback((state: boolean) => {
      dispatch(onSetIsLogin(state));
   }, [dispatch]);


   // const onSetLogin = useCallback((state: boolean) => {
   //    dispatch(setLogin(state));
   // }, [dispatch]);

   // useEffect(() => {
   //    dispatch(onRequestGetCsrf());
   // }, [dispatch]);

   return {
      width,
      token,
      login,
      onSetLogin,
      loading,
      e,
   };
}