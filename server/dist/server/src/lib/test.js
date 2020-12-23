"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
var crypto_1 = __importDefault(require("crypto"));
function a(pwd, data, cd) {
    crypto_1.default.pbkdf2(pwd, data.salt, 100385, 64, "sha512", function (err, key) {
        cd(data.password === key.toString("base64"));
    });
}
exports.a = a;
//# sourceMappingURL=test.js.map