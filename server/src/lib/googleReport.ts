let { google } = require("googleapis");
let ApiKeyFile = require("blog-300812-46961c51a03e.json");
let viewID = process.env.VIEW_ID;

export default function googleReport() {
   return new Promise((resolve, reject) => {

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
            "start-date": "2021-01-05",
            "end-date": "today",
            "dimensions": "ga:date",
            "metrics": "ga:users,ga:sessions",
         }, function(err: any, response: any) {
            if (err) {
               console.log(err);
               reject(err);
               return;
            }
            resolve(JSON.stringify(response.data, null, 4));
         });
      }
   });


}
