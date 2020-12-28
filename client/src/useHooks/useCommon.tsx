import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { onNewRequset, onSetIsLogin } from "../modules/Common";

export default function useCommon() {
   const dispatch = useDispatch();

   const { width, token, login, loading, newRequest, e } = useSelector((state: RootState) => state.common);

   const onSetLogin = useCallback((state: boolean) => {
      dispatch(onSetIsLogin(state));
   }, [dispatch]);

   const setNewRequset = useCallback((state: boolean) => {
      dispatch(onNewRequset(state));
   }, [dispatch]);
   //state true mean state need new Request, false is opposite


   return {
      width,
      token,
      login,
      loading,
      e,
      onSetLogin,
      newRequest,
      setNewRequset,
   };
}