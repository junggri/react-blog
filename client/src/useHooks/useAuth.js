"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Auth() {
    var _a = react_1.useState(false), isSignedIn = _a[0], setIsSignedIn = _a[1];
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
