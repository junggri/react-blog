import React, { useEffect, useState } from "react";
import util from "../lib/axios";


function CSRF(login: boolean) {
   const [csrf, setCsrf] = useState("");


   useEffect(() => {
      console.log(login);
      if (login)
         (async () => {
            const { data } = await util.getCSRTtoken();
            setCsrf(data);
         })();
   }, [login]);

   return csrf;
}

export default CSRF;