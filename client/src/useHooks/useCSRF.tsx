import React, { useEffect, useState } from "react";
import util from "../lib/axios";

function CSRF() {
   const [csrf, setCsrf] = useState(null);

   useEffect(() => {
      (async () => {
         const { data } = await util.getCSRTtoken();
         setCsrf(data);
      })();
   }, []);

   return csrf;
}

export default CSRF;