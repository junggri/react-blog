"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useAuth_1 = __importDefault(require("./useAuth"));
var Report = function () {
    var _a = react_1.useState(null), data = _a[0], setData = _a[1];
    var _b = react_1.useState(true), load = _b[0], setLoad = _b[1];
    var isSignedIn = useAuth_1.default();
    react_1.useEffect(function () {
        if (isSignedIn && load) {
            var queryReport = function () {
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
                }).then(displayResults_1);
            };
            var displayResults_1 = function (response) {
                var queryResult = response.result.reports[0].data;
                if (load)
                    setData(queryResult);
            };
            queryReport();
        }
        return function () {
            setLoad(false);
        };
    }, [isSignedIn, load]);
    return data;
};
exports.default = Report;
