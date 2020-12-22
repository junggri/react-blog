"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var adminModel = {
    login: function (data) {
        crypto_1.default.randomBytes(64, function (err, buf) {
            var salt = buf.toString("base64");
            crypto_1.default.pbkdf2(data.pwd, salt, 100385, 64, "sha512", function (err, key) {
                console.log(key.toString("base64"));
            });
        });
    },
};
exports.default = adminModel;
//# sourceMappingURL=admin.model.js.map