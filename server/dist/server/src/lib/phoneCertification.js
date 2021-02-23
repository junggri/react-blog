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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var resultCode;
function certifiCation() {
    var randomArray = [];
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * 10);
        randomArray.push(randomNum);
    }
    var user_auth_number = parseInt(randomArray.join(""), 10);
    var date = Date.now().toString();
    var uri = process.env.API_URI;
    var secretKey = process.env.API_SECRETKEY;
    var accessKey = process.env.API_ACCESSKEY;
    var method = "POST";
    var space = " ";
    var newLine = "\n";
    var url = "https://sens.apigw.ntruss.com/sms/v2/services/" + uri + "/messages";
    var url2 = "/sms/v2/services/" + uri + "/messages";
    var hmac = crypto_js_1.default.algo.HMAC.create(crypto_js_1.default.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);
    var hash = hmac.finalize();
    var signature = hash.toString(crypto_js_1.default.enc.Base64);
    request_1.default({
        method: method,
        json: true,
        uri: url,
        headers: {
            "Contenc-type": "application/json; charset=utf-8",
            "x-ncp-iam-access-key": accessKey,
            "x-ncp-apigw-timestamp": date,
            "x-ncp-apigw-signature-v2": signature,
        },
        body: {
            type: "SMS",
            countryCode: "82",
            from: process.env.API_PHONE,
            content: user_auth_number,
            messages: [
                {
                    to: process.env.API_PHONE,
                },
            ],
        },
    }, function (err, res, html) {
        if (err)
            console.log(err);
        else {
            resultCode = 200;
            console.log(1, html);
        }
    });
    return user_auth_number;
}
exports.default = certifiCation;
//# sourceMappingURL=phoneCertification.js.map