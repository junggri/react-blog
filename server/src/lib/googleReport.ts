import { Response } from "express";

let { google } = require("googleapis");
let ApiKeyFile = require("blog-300812-46961c51a03e.json");
let viewID = process.env.VIEW_ID;

export default function googleReport(res: Response) {
   let jwtClient = new google.auth.JWT(ApiKeyFile.client_email, null, ApiKeyFile.private_key, ["https://www.googleapis.com/auth/analytics.readonly"], null);

   jwtClient.authorize(function(err: any, tokens: any) {
      if (err) {
         console.log(err);
         return;
      }
      let analytics = google.analytics("v3");
      queryData(analytics);
   });


   function queryData(analytics: any) {
      analytics.data.ga.get({
         "auth": jwtClient,
         "ids": viewID,
         "start-date": "2021-01-03",
         "end-date": "today",
         "dimensions": "ga:date",
         "metrics": "ga:users,ga:sessions",
      }, function(err: any, response: any) {
         if (err) {
            console.log(err);
            return;
         }
         res.status(200).json({ data: JSON.stringify(response, null, 4) });

      });
   }

}
