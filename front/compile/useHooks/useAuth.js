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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Auth() {
    var _a = __read(react_1.useState(false), 2), isSignedIn = _a[0], setIsSignedIn = _a[1];
    var initAuth = function () {
        return window.gapi.auth2.init();
    };
    var checkSignedIn = function () {
        return new Promise(function (resolve, reject) {
            initAuth()
                .then(function () {
                var auth = window.gapi.auth2.getAuthInstance();
                resolve(auth.isSignedIn.get());
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    var init = function () {
        checkSignedIn()
            .then(function (signedIn) {
            setIsSignedIn(signedIn);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    react_1.useEffect(function () {
        window.gapi.load("auth2", init);
    }, [init]);
    return isSignedIn;
}
exports.default = Auth;
