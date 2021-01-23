import connectRedis from "connect-redis";
import session from "express-session";
import redis from "redis";
import env from "../../../../server.env.json";
import * as dotenv from "dotenv";

dotenv.config();

const RedisStore = connectRedis(session);

const _client = redis.createClient({
   host: process.env.REDIS as string,
   port: env.SESSION_PORT,
});


export const sessionConfig = {
   secret: env.SESSEION_KEY,
   name: "sid",
   resave: false,
   saveUninitialized: true,
   store: new RedisStore({
      client: _client,
      ttl: 60 * 60 * 24, //second
      //ttl을 토큰시간과 맞춰야 하나 ???....
   }),
   cookie: {
      httpOnly: true,
      secure: false, //true,
   },
};