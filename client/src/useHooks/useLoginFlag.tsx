import React, { useEffect } from "react";
import useCommon from "./useCommon";
import checkUserState from "../lib/checkUserState";

function LoginFlag() {
   const { onSetLogin } = useCommon();

   useEffect(() => {
      const token = localStorage.getItem("_jt");
      const status = checkUserState(token);
      status ? onSetLogin(true) : onSetLogin(false);
   }, []);
}

export default LoginFlag;