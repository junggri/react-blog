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
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import indexApi from "../src/router";
import topicApi from "../src/router/topic";
import adminApi from "../src/router/admin";
import queryResolver from "./graphql/query.resolvers";
import mutationResolver from "./graphql/mutation.resolvers";
import schemaType from "./graphql/type";

const app = express();
app.disable("x-powered-by");

app
   .use(header)
   .use(logger("dev"))
   .use(compression())
   .use(helmet.noSniff())
   .use(helmet.xssFilter())
   .use(session(sessionConfig))
   .use(cookieParser(process.env.SESSEION_KEY))
   .use(helmet.frameguard({ action: "deny" }))
   .use(cors({ origin: true, credentials: true }))
   .use("/thumbnail", express.static(path.resolve("../thumbnail")))
   .use("/images", express.static(path.resolve(__dirname, "public/images")))
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false }))
   .use(csrfProtection);

app.use("/api", indexApi); //공통라우터
app.use("/topic", topicApi); //콘텐츠 관련 라우터
app.use("/admin", adminApi);
const schema = buildSchema(schemaType);

const root = {
   ...queryResolver,
   ...mutationResolver,
};

app.use(
   "/graphql",
   graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
   }),
);


app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};
   res.status(err.status || 500);
   console.log(err);
});

app.listen(5000, () => {
   console.log("running on 5000 and start server");
});


const name = {
   a: "123",
   b: "asdasd",
};

interface INmae {
   a: string
   b: string
}

function a<T, K extends keyof T>(obj: T, key: K): T[K] {
   console.log(obj[key]);
   return obj[key];
}
