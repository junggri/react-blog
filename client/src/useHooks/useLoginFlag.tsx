import React, { useEffect } from "react";
import useCSRF from "./useCSRF";
import useCommon from "./useCommon";
import util from "../lib/axios";

function LoginFlag() {
   const csrf = useCSRF();
   const { onSetLogin } = useCommon();

   useEffect(() => {
      if (csrf) {
         (async () => {
            const { data } = await util.checkJWTToken(csrf);
            data.decoded ? onSetLogin(true) : onSetLogin(false);
         })();
      }
   }, [csrf, onSetLogin]);

}

export default LoginFlag;