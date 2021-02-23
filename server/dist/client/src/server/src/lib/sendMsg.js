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
var server_env_json_1 = __importDefault(require("../../../../server.env.json"));
var resultCode;
dotenv.config();
function certifiCation(postname, who, content) {
    var date = Date.now().toString();
    var uri = server_env_json_1.default.API_URI;
    var secretKey = server_env_json_1.default.API_SECRETKEY;
    var accessKey = server_env_json_1.default.API_ACCESSKEY;
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
            from: server_env_json_1.default.API_PHONE,
            content: postname + "\uAE00\uC5D0 " + who + "\uB2D8\uC774 \uB313\uAE00\uC744 \uC791\uC131\uD558\uC168\uC2B5\uB2C8\uB2E4. \n                      \uB313\uAE00\uB0B4\uC6A9 : " + content + "\n                      ",
            messages: [
                {
                    to: server_env_json_1.default.API_PHONE,
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
    return true;
}
exports.default = certifiCation;
//# sourceMappingURL=sendMsg.js.map