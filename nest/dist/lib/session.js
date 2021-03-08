"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connect_redis_1 = require("connect-redis");
var express_session_1 = require("express-session");
var redis_1 = require("redis");
var dotenv = require("dotenv");
dotenv.config();
var RedisStore = connect_redis_1.default(express_session_1.default);
var _client = redis_1.default.createClient({
    host: process.env.REDIS,
    port: Number(process.env.SESSION_PORT),
});
var sessionConfig = {
    secret: process.env.SESSEION_KEY,
    name: "sid",
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
        client: _client,
        ttl: 60 * 60 * 24,
    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
};
exports.default = sessionConfig;
//# sourceMappingURL=session.js.map