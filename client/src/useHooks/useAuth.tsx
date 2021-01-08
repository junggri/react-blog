import React, { useEffect, useState } from "react";

function Auth() {
   const [isSignedIn, setIsSignedIn] = useState(false);
   const initAuth = () => {
      return window.gapi.auth2.init({
         client_id: "563986907951-2ju677cmt4dlkqc6lb163puk6hqjb3f6.apps.googleusercontent.com", //paste your client ID here
         scope: "https://www.googleapis.com/auth/analytics.readonly",
      });
   };

   const checkSignedIn = () => {
      return new Promise((resolve, reject) => {
         initAuth() //calls the previous function
            .then(() => {
               const auth = window.gapi.auth2.getAuthInstance(); //returns the GoogleAuth object
               resolve(auth.isSignedIn.get()); //returns whether the current user is currently signed in
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