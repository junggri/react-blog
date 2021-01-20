"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var google = require("googleapis").google;
var viewID = process.env.VIEW_ID;
function googleReport() {
    return new Promise(function (resolve, reject) {
        var jwtClient = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, ["https://www.googleapis.com/auth/analytics.readonly"], null);
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                console.log(err);
                return;
            }
            var analytics = google.analytics("v3");
            queryData(analytics);
        });
        function queryData(analytics) {
            analytics.data.ga.get({
                "auth": jwtClient,
                "ids": viewID,
                "start-date": "2021-01-05",
                "end-date": "today",
                "dimensions": "ga:date",
                "metrics": "ga:users,ga:sessions",
            }, function (err, response) {
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
exports.default = googleReport;
//# sourceMappingURL=googleReport.js.map