"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connect_redis_1 = __importDefault(require("connect-redis"));
var redis_1 = __importDefault(require("redis"));
var express_session_1 = __importDefault(require("express-session"));
var app = express_1.default();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
console.log(app.get("env")); //개발 단계확인\
// app.set("env", "production");
var RedisStore = connect_redis_1.default(express_session_1.default);
var _client = redis_1.default.createClient();
var sessionConfig = {
    secret: "asdunvajnsr",
    name: "sessionID",
    resave: false,
    saveUninitialized: true,
};
app.set("port", process.env.PORT || 4000);
var server = app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});
//# sourceMappingURL=app.js.map