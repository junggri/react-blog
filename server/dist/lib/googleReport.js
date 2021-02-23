"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var google = require("googleapis").google;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
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