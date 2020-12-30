import connectRedis from "connect-redis";
import session from "express-session";
import redis from "redis";

const RedisStore = connectRedis(session);
const _client = redis.createClient();

export const sessionConfig = {
   secret: process.env.SESSEION_KEY as string,
   name: "sid",
   resave: false,
   saveUninitialized: true,
   store: new RedisStore({
      host: "redis",
      port: 6379,
      client: _client,
      ttl: 60 * 60 * 24, //second
      //ttl을 토큰시간과 맞춰야 하나 ???....
   }),
   cookie: {
      httpOnly: true,
      secure: false, //true,
   },
};