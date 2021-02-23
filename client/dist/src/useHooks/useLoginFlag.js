"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCommon_1 = __importDefault(require("./useCommon"));
var checkUserState_1 = __importDefault(require("../lib/checkUserState"));
function LoginFlag() {
    var onSetLogin = useCommon_1.default().onSetLogin;
    react_1.useEffect(function () {
        var token = localStorage.getItem("_jt");
        var status = checkUserState_1.default(token);
        status ? onSetLogin(true) : onSetLogin(false);
    }, []);
}
exports.default = LoginFlag;
