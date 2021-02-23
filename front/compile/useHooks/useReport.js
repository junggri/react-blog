"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useAuth_1 = __importDefault(require("./useAuth"));
var Report = function () {
    var _a = __read(react_1.useState(null), 2), data = _a[0], setData = _a[1];
    var _b = __read(react_1.useState(true), 2), load = _b[0], setLoad = _b[1];
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
