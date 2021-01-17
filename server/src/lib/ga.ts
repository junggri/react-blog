let { google } = require("googleapis");
let ApiKeyFile = require("blog-300812-9987abcdeebb.json");
let viewID = "ga:235239777";

export default function ga() {
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
         "metrics": "ga:users,ga:sessions",
         "dimensions:": "ga:date",
         "start-date": "2021-01-03",
         "end-date": "today",
      }, function(err: any, response: any) {
         if (err) {
            console.log(err);
            return;
         }
         console.log(JSON.stringify(response, null, 4));
      });
   }
}
