import express, { NextFunction, Request, Response } from "express";
import compression from "compression";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import sessionConfig from "./config/session";
import path from "path";
import cors from "cors";
import { csrfProtection, header } from "./lib/middlewares";

const app = express();
app.disable("x-powered-by");

console.log(process.env.NODE_ENV);
app
   .use(header)
   .use(logger("dev"))
   .use(compression())
   .use(helmet.noSniff())
   .use(bodyParser.json())
   .use(helmet.xssFilter())
   .use(session(sessionConfig))
   .use(cookieParser(process.env.SESSEION_KEY))
   .use(helmet.frameguard({ action: "deny" }))
   .use(cors({ origin: true, credentials: true }))
   .use("/thumbnail", express.static(path.resolve("../thumbnail")))
   .use(bodyParser.urlencoded({ extended: false }))
   .use(csrfProtection);

app.get("/test", (req: Request, res: Response) => {
   try {
      res.status(200).json(200);
   } catch (e) {
      console.log(e);
   }

});

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};
   res.status(err.status || 500);
   console.log(err);
});


app.listen(5000, () => {
   console.log("running on 5000 and start server");
});