import express, { NextFunction, Request, Response } from "express";
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
import csrf from "csurf";
import indexApi from "./router";
import topicApi from "./router/topic";

require("dotenv").config();

const app = express();

app.disable("x-powered-by");

const RedisStore = connectRedis(session);
const _client = redis.createClient();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
console.log(app.get("env")); //개발 단계확인\

// app.set("env", "production");

const csrfProtection = csrf({
   cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      // maxAge: 3600, // 1-houra
   },
});

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


app.set("port", process.env.PORT || 4000);

app.set("views", __dirname + "/../../client/build");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app
   .use(logger("dev"))
   .use(express.static(path.join(__dirname, "../../client/build")))
   .use("/contents", express.static(path.join(__dirname, "/../contents")))
   .use(compression())
   .use(helmet.noSniff())
   .use(bodyParser.json())
   .use(helmet.xssFilter())
   .use(session(sessionConfig))
   .use(cookieParser("asdunvajnsr"))
   .use(helmet.frameguard({ action: "deny" }))
   .use(bodyParser.urlencoded({ extended: false }));
// .use(csrfProtection);

app.use(function(req, res, next) {
   res.header("Cache-control", "no-cache, must-revalidate");
   res.header("Pragma", "no-cache");
   next();
});

// app.get("/", (req, res) => {
//   res.render("index.html");
// });


app.use("/api", indexApi); //공통라우터
app.use("/topic", topicApi); //콘텐츠 관련 라우터


app.use((req, res, next) => {
   res.status(404).send("Sorry cant find that!");
   next(createError(404));
});

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};
   res.status(err.status || 500);
   console.log(err);
});

app.listen(app.get("port"), () => {
   console.log("Express server listening on port " + app.get("port"));
});
