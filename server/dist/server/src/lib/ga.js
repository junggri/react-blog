"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var google = require("googleapis").google;
var ApiKeyFile = require("blog-300812-9987abcdeebb.json");
var viewID = "ga:235239777";
function ga() {
    var jwtClient = new google.auth.JWT(ApiKeyFile.client_email, null, ApiKeyFile.private_key, ["https://www.googleapis.com/auth/analytics.readonly"], null);
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
            "metrics": "ga:users,ga:sessions",
            "dimensions:": "ga:date",
            "start-date": "2021-01-03",
            "end-date": "today",
        }, function (err, response) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(JSON.stringify(response, null, 4));
        });
    }
}
exports.default = ga;
//# sourceMappingURL=ga.js.map