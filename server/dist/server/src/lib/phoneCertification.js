"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var resultCode;
var _content = "Ad";
function certifiCation() {
    var randomArray = [];
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * 10);
        randomArray.push(randomNum);
    }
    // let user_phone_number = phone_num;
    var user_auth_number = randomArray.join("");
    var date = Date.now().toString();
    var uri = "ncp:sms:kr:258388484624:authoriztion";
    var secretKey = "iAC8fi4tH0dWVmckGrtMm92drplta6RxUhGnIKzd";
    var accessKey = "cEk7AGKu4h9f72FEzLLC";
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
            from: "01077652103",
            content: _content,
            messages: [
                {
                    to: "01077652103",
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
}
exports.default = certifiCation;
//# sourceMappingURL=phoneCertification.js.map