import React, { useEffect, useState } from "react";
import util from "../lib/axios";


function CSRF() {
   const [csrf, setCsrf] = useState<string | null>(null);

   useEffect(() => {
      (async () => {
         const { data } = await util.getCSRTtoken();
         setCsrf(data.token);
      })();
      return function cleanUp() {
         setCsrf(null);
      };
   }, []);
   return csrf;
}

export default CSRF;