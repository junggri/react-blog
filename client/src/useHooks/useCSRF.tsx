import React, { useEffect, useState } from "react";
import util from "../lib/axios";


function CSRF() {
   const [csrf, setCsrf] = useState("");
   useEffect(() => {
      (async () => {
         const { data } = await util.getCSRTtoken();
         setCsrf(data.token);
      })();
      return function cleanUp() {
         setCsrf("");
      };
   }, []);

   return csrf;
}

export default CSRF;