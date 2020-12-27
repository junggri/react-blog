import React, { useEffect } from "react";
import useCommon from "./useCommon";
import util from "../lib/axios";

function LoginFlag() {
   const { onSetLogin } = useCommon();
   //로그인안했는데 굳이 이거 체크할 리듀서에 체크할필요가 없지않나?

   useEffect(() => {
      (async () => {
         const { data } = await util.checkJWTToken();
         data.decoded ? onSetLogin(true) : onSetLogin(false);
      })();
   }, [onSetLogin]);

}

export default LoginFlag;