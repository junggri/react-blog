import React, { useEffect, useState } from "react";

function Auth() {
   const [isSignedIn, setIsSignedIn] = useState(false);
   const initAuth = () => {
      return window.gapi.auth2.init();
   };

   const checkSignedIn = () => {
      return new Promise((resolve, reject) => {
         initAuth()
            .then(() => {
               const auth = window.gapi.auth2.getAuthInstance();
               resolve(auth.isSignedIn.get());
            })
            .catch((error: Error) => {
               reject(error);
            });
      });
   };

   const init = () => {
      checkSignedIn()
         .then((signedIn: any) => {
            setIsSignedIn(signedIn);
         })
         .catch((error) => {
            console.error(error);
         });
   };

   useEffect(() => {
      window.gapi.load("auth2", init);
   }, [init]);

   return isSignedIn;
}

export default Auth;