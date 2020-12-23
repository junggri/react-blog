"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
function loginCertification(pwd, data) {
    var a = crypto_1.default.pbkdf2(pwd, data.salt, 100385, 64, "sha512", function (err, key) {
        if (data.password === key.toString("base64")) {
            return true;
        }
    });
    console.log(1, a);
}
exports.default = loginCertification;
//# sourceMappingURL=loginCertification.js.map