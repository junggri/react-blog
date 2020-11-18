import express from "express";
import path from "path";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectRedis from "connect-redis";
import redis from "redis";
import logger from "logger";
import session from "express-session";
const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
console.log(app.get("env")); //개발 단계확인\

// app.set("env", "production");

const RedisStore = connectRedis(session);
const _client = redis.createClient();

const sessionConfig = {
  secret: "asdunvajnsr",
  name: "sessionID",
  resave: false,
  saveUninitialized: true,
};

app.set("port", process.env.PORT || 4000);

const server = app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
