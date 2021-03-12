"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptoPwd = exports.cryptoPwd = void 0;
const crypto_1 = require("crypto");
const util_1 = require("util");
const dotenv = require("dotenv");
dotenv.config();
dotenv.config();
const promiseSalt = util_1.default.promisify(crypto_1.default.randomBytes);
const promise = util_1.default.promisify(crypto_1.default.pbkdf2);
async function cryptoPwd(pwd) {
    const buf = await promiseSalt(Number(process.env.CRYPTO_NUM));
    const salt = buf.toString("base64");
    const key = await promise(pwd, salt, Number(process.env.CRYPTO_ITER), Number(process.env.CRYPTO_NUM), String(process.env.CRYPTO_ALGO));
    const _pwd = key.toString("base64");
    return { salt, _pwd };
}
exports.cryptoPwd = cryptoPwd;
async function decryptoPwd(data, pwd, writer) {
    if (data.writer === writer) {
        const key = await promise(pwd, data.salt, Number(process.env.CRYPTO_ITER), Number(process.env.CRYPTO_NUM), String(process.env.CRYPTO_ALGO));
        return data.pwd === key.toString("base64");
    }
    else {
        return false;
    }
}
exports.decryptoPwd = decryptoPwd;
//# sourceMappingURL=cryptoPwd.js.map