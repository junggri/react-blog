"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var connect_redis_1 = __importDefault(require("connect-redis"));
var redis_1 = __importDefault(require("redis"));
var morgan_1 = __importDefault(require("morgan"));
var express_session_1 = __importDefault(require("express-session"));
var cors_1 = __importDefault(require("cors"));
var compression_1 = __importDefault(require("compression"));
var http_errors_1 = __importDefault(require("http-errors"));
var csurf_1 = __importDefault(require("csurf"));
var app = express_1.default();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
console.log(app.get("env")); //개발 단계확인\
// app.set("env", "production");
var RedisStore = connect_redis_1.default(express_session_1.default);
var _client = redis_1.default.createClient();
var sessionConfig = {
    secret: "asdunvajnsr",
    name: "sessionID",
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
        host: "localhost",
        port: 6379,
        client: _client,
        ttl: 60 * 60 * 24,
    }),
    cookie: {
        httpOnly: true,
        secure: false,
    },
};
app.disable("x-powered-by");
app.use(cors_1.default({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.get("/", function (req, res) {
    res.status(200).send({ token: "asdasd" });
});
app
    .use(morgan_1.default("dev"))
    .use(compression_1.default())
    .use(helmet_1.default.noSniff())
    .use(body_parser_1.default.json())
    .use(helmet_1.default.xssFilter())
    .use(express_session_1.default(sessionConfig))
    .use(cookie_parser_1.default("asdunvajnsr"))
    .use(helmet_1.default.frameguard({ action: "deny" }))
    .use(body_parser_1.default.urlencoded({ extended: false }));
app.use(csurf_1.default({
    cookie: {
        key: "awas",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
    },
}));
// app.use(express.static(path.join(__dirname + "/../webpack")));
// app.use(express.static(path.join(__dirname, "../static/css")));
// app.use(express.static(path.join(__dirname, "../static/image")));
// app.use(express.static(path.join(__dirname, "../upload")));
app.set("port", process.env.PORT || 4000);
app.use(function (req, res, next) {
    res.status(404).send("Sorry cant find that!");
    next(http_errors_1.default(404));
});
app.use(function (err, req, res, next) {
    // 라우트에서 new Error 생성하고 next 인자로 주면 에러 스택에 내용이나온다
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    console.log(err);
});
var server = app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});
//# sourceMappingURL=app.js.map