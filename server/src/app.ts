import express, { Request, Response, NextFunction } from "express";
import path from "path";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectRedis from "connect-redis";
import redis from "redis";
import logger from "morgan";
import session from "express-session";
import cors from "cors";
import compression from "compression";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import csrf from "csurf";

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
  store: new RedisStore({
    host: "localhost",
    port: 6379,
    client: _client,
    ttl: 60 * 60 * 24, //second
    //ttl을 토큰시간과 맞춰야 하나 ???....
  }),
  cookie: {
    httpOnly: true,
    secure: false, //true
  },
};

app.disable("x-powered-by");

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.get("/", (req, res) => {
  res.status(200).send({ token: "asdasd" });
});

app
  .use(logger("dev"))
  .use(compression())
  .use(helmet.noSniff())
  .use(bodyParser.json())
  .use(helmet.xssFilter())
  .use(session(sessionConfig))
  .use(cookieParser("asdunvajnsr"))
  .use(helmet.frameguard({ action: "deny" }))
  .use(bodyParser.urlencoded({ extended: false }));

app.use(
  csrf({
    cookie: {
      key: "awas",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600, // 1-hour
    },
  })
);
// app.use(express.static(path.join(__dirname + "/../webpack")));

// app.use(express.static(path.join(__dirname, "../static/css")));
// app.use(express.static(path.join(__dirname, "../static/image")));
// app.use(express.static(path.join(__dirname, "../upload")));

app.set("port", process.env.PORT || 4000);

app.use((req, res, next) => {
  res.status(404).send("Sorry cant find that!");
  next(createError(404));
});

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // 라우트에서 new Error 생성하고 next 인자로 주면 에러 스택에 내용이나온다

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  console.log(err);
});

const server = app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
