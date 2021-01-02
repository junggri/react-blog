import connectRedis from "connect-redis";
import session from "express-session";
import redis from "redis";


const RedisStore = connectRedis(session);
const _client = redis.createClient({
    host: process.env.NODE_ENV === "development"
        ? process.env.REDIS_DEV as string
        : process.env.REDIS_PROD as string,
    port: 6379,
});

export const sessionConfig = {
    secret: process.env.SESSEION_KEY as string,
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