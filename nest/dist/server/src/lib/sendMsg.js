"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("request");
const crypto_js_1 = require("crypto-js");
const dotenv = require("dotenv");
let resultCode;
dotenv.config();
function certifiCation(postname, who, content) {
    const date = Date.now().toString();
    const uri = process.env.API_URI;
    const secretKey = process.env.API_SECRETKEY;
    const accessKey = process.env.API_ACCESSKEY;
    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
    const url2 = `/sms/v2/services/${uri}/messages`;
    const hmac = crypto_js_1.default.algo.HMAC.create(crypto_js_1.default.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);
    const hash = hmac.finalize();
    const signature = hash.toString(crypto_js_1.default.enc.Base64);
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
            content: `${postname}글에 ${who}님이 댓글을 작성하셨습니다. 
                      댓글내용 : ${content}
                      `,
            messages: [
                {
                    to: process.env.API_PHONE,
                },
            ],
        },
    }, (err, res, html) => {
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