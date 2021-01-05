import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";
import compression from "compression";
import createError from "http-errors";
import csrf from "csurf";
import indexApi from "./router";
import topicApi from "./router/topic";
import adminApi from "./router/admin";
import cors from "cors";
import { sessionConfig } from "./config/session.config";
import path from "path";

const app = express();
app.disable("x-powered-by");

const csrfProtection = csrf({
   cookie: {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
   },
});
let content_path: string = process.env.NODE_ENV === "development"
   ? "/../../contents"
   : "/../../../../contents";


app.use(function(req, res, next) {
   res.header("Cache-control", "no-cache, must-revalidate");
   res.header("Pragma", "no-cache");
   res.header("Access-Control-Allow-Methods", "GET POST DELELTE");
   next();
});

app
   .use(logger("dev"))
   .use(compression())
   .use(helmet.noSniff())
   .use(bodyParser.json())
   .use(helmet.xssFilter())
   .use(session(sessionConfig))
   .use(cookieParser(process.env.SESSEION_KEY))
   .use(helmet.frameguard({ action: "deny" }))
   .use(cors({ origin: true, credentials: true }))
   .use(bodyParser.urlencoded({ extended: false }))
   .use(express.static(path.join(__dirname, "/../../../public")))
   .use(express.static(path.join(__dirname, "/../../../build")))
   .use("/contents", express.static(path.join(__dirname, content_path)))
   .use(csrfProtection);


app.use("/api", indexApi); //공통라우터
app.use("/topic", topicApi); //콘텐츠 관련 라우터
app.use("/admin", adminApi);


app.get("*", (req: Request, res: Response) => {
   res.sendFile(path.join(__dirname, "/../../../build/index.html"));
});

app.set("port", process.env.PORT || 4000);


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