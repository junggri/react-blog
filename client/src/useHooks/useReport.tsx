import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

declare global {
   interface Window {
      gapi: any
   }
}

const Report = () => {
   const [data, setData] = useState(null);
   const [load, setLoad] = useState(true);
   const isSignedIn = useAuth();
   useEffect(() => {
      if (isSignedIn) {
         const queryReport = () => {
            window.gapi.client
               .request({
                  path: "/v4/reports:batchGet",
                  root: "https://analyticsreporting.googleapis.com/",
                  method: "POST",
                  body: {
                     reportRequests: [
                        {
                           viewId: "235239777", //enter your view ID here
                           dateRanges: [
                              {
                                 startDate: "2021-01-03",
                                 endDate: "today",
                              },
                           ],
                           metrics: [
                              {
                                 expression: "ga:users",
                              },
                           ],
                           dimensions: [
                              {
                                 name: "ga:date",
                              },
                           ],
                        },
                     ],
                  },
               }).then(displayResults);
         };
         const displayResults = (response: any) => {
            const queryResult = response.result.reports[0].data;
            if (load) setData(queryResult);
         };
         queryReport();
      }

      return () => {
         setLoad(false);
      };
   }, [isSignedIn, load]);
   return data;
};

export default Report;