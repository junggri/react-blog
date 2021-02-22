import React from "react";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import csrf from "csurf";
import env from "../server.env.json";
import PreloadContext from "./lib/PreloadContext";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import { StaticRouter } from "react-router-dom";
import App from "./shared/App";
import ReactDOMServer from "react-dom/server";
import createPage from "./lib/createPage";
import logger from "morgan";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import session from "express-session";
import { sessionConfig } from "./server/src/config/session.config";
import cookieParser from "cookie-parser";
import cors from "cors";
import indexApi from "./server/src/router";
import topicApi from "./server/src/router/topic";
import adminApi from "./server/src/router/admin";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Helmet } from "react-helmet";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import "graphql-import-node";
import model from "./server/src/model/topic.model";
import { ChunkExtractor } from "@loadable/server";

const statsFile = path.resolve("./build/loadable-stats.json");
// We create an extractor from the statsFile
const extractor = new ChunkExtractor({ statsFile });
const app = express();

app.disable("x-powered-by");

const csrfProtection = csrf({
   cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
   },
});

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
   .use(cookieParser(env.SESSEION_KEY))
   .use(helmet.frameguard({ action: "deny" }))
   .use("/thumbnail", express.static(path.resolve("../thumbnail")))
   .use(cors({ origin: true, credentials: true }))
   .use(bodyParser.urlencoded({ extended: false }))
   .use(csrfProtection);

const schema = buildSchema(`
   type Query{
      name:Int
      Allposts:[Allposts]
   }

   type Allposts{
      id: Int
      comment: Int
      uid: String
      content_name: String
      date: String
      created: String
      file: String
      detail:String
      thumbnail:String
      kindOfPosts: String
      modified: String
      topic: String
   }
`);

const root = {
   Allposts: async () => {
      let result: any = await model.getAllPostsItems();
      return result;
   },
   name: () => 123,
};

app.use("/graphql", graphqlHTTP({
   schema: schema,
   rootValue: root,
   graphiql: true,
}));

app.use("/api", indexApi); //공통라우터
app.use("/topic", topicApi); //콘텐츠 관련 라우터
app.use("/admin", adminApi);


const serverRender = async (req: Request, res: Response, next: NextFunction) => {

   const sheet = new ServerStyleSheet();
   const context = {};
   const preloadContext: any = { done: false, promises: [] };
   const jsx = extractor.collectChunks(
      <PreloadContext.Provider value={preloadContext}>
         <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
               <GlobalStyles />
               <App />
            </StaticRouter>
         </Provider>
      </PreloadContext.Provider>,
   );

   ReactDOMServer.renderToStaticMarkup(jsx);
   try {
      await Promise.all(preloadContext.promises);
   } catch (e) {
      console.error(e);
      return res.status(500);
   }
   preloadContext.done = true;
   const html = ReactDOMServer.renderToString(sheet.collectStyles(jsx));
   const styles = sheet.getStyleTags();
   const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
   const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`;
   const RHelmet = Helmet.renderStatic();
   res.send(createPage(html, stateScript, styles, RHelmet));
};

const serve = express.static(path.resolve("./build"), { index: false });

app.use(serve);
app.use(serverRender);


app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};
   res.status(err.status || 500);
   console.log(err);
});


app.listen(4000, () => {
   console.log("running on 4000 and start server");
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
