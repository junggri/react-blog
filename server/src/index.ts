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
// import model from "../src/model/topic.model";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import indexApi from "../src/router";
import topicApi from "../src/router/topic";
import adminApi from "../src/router/admin";
import queryResolver from "./graphql/query.resolvers";
import mutationResolver from "./graphql/mutation.resolvers";


const app = express();
app.disable("x-powered-by");

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

const schema = buildSchema(`
    type Query{
      Allposts:[Allposts]
      postContent(topic:String ,postsId:String) : postContent
      tableName:[table]
      temporaryPost:[temporaryPost]
      getTextEditorData: textEditorData
      getTemporaryContent(uid:String):content
    }
    
    type Mutation{
      savePost(input:postData):result
      createTopic(topic:String):result
      saveTemporaryPost(input:temporaryData):result
      deleteTopic(topic:String):result
      deletePost(topic:String, identifier:String):result
      deleteTemporaryPost(identifier:String):result
    }
      
    input temporaryData{
      topicName:String
      content:String
      contentName:String
      detail:String
    } 
    
    input postData{
      contentName:String
      content:String
      topicName:String
      kindofPosts:String
      detail:String
      thumbnail:String
    }
     
    type result{
      state:Boolean
    }
    
    type content{
      content:String
    }
    
    type postContent{
      content:String
      result:[Allposts]
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
   
    type table {
      Tables_in_contents:String
    }
   
    type temporaryPost{
      uid: String
      topic: String
      created: String
      content_name:String
      detail: String
      file: String
    }
   
    type textEditorData{
      tableName:[table]
      tempPostList:[temporaryPost]
    }
`);

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

app.use("/api", indexApi); //공통라우터
app.use("/topic", topicApi); //콘텐츠 관련 라우터
app.use("/admin", adminApi);

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};
   res.status(err.status || 500);
   console.log(err);
});

app.listen(5000, () => {
   console.log("running on 5000 and start server");
});
