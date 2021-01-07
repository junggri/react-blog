declare global {
   interface Window {
      gapi: any
   }
}
import React, { useEffect, useState } from "react";

const Report = () => {
   const [data, setData] = useState(null);

   useEffect(() => {
      const req = setTimeout(() => {
         const queryReport = () => {
            window.gapi.client
               .request({
                  path: "/v4/reports:batchGet",
                  root: "https://analyticsreporting.googleapis.com/",
                  method: "POST",
                  body: {
                     reportRequests: [
                        {
                           viewId: "235239777",
                           dateRanges: [
                              {
                                 startDate: "10daysAgo",
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
               })
               .then(displayResults, console.error.bind(console));
         };
         const displayResults = (response: any) => {
            const queryResult = response.result.reports[0].data;
            if (response.status === 200) setData(queryResult);
         };
         queryReport();
      }, 800);
      return () => {
         clearTimeout(req);
      };
   }, []);
   return data;
};

export default Report;