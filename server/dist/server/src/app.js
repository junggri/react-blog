"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var connect_redis_1 = __importDefault(require("connect-redis"));
var redis_1 = __importDefault(require("redis"));
var morgan_1 = __importDefault(require("morgan"));
var express_session_1 = __importDefault(require("express-session"));
var compression_1 = __importDefault(require("compression"));
var http_errors_1 = __importDefault(require("http-errors"));
var csurf_1 = __importDefault(require("csurf"));
var router_1 = __importDefault(require("./router"));
var topic_1 = __importDefault(require("./router/topic"));
var admin_1 = __importDefault(require("./router/admin"));
var cors_1 = __importDefault(require("cors"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var app = express_1.default();
app.disable("x-powered-by");
var RedisStore = connect_redis_1.default(express_session_1.default);
var _client = redis_1.default.createClient();
process.env.NODE_ENV = process.env.NODE_ENV || "production";
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
console.log(process.env.NODE_ENV);
var sessionConfig = {
    secret: process.env.SESSEION_KEY,
    name: "sid",
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
        host: process.env.NODE_ENV === "development"
            ? process.env.SESSION_HOST
            : process.env.SESSION_HOST_PROD,
        port: parseInt(process.env.SESSION_PORT, 10),
        client: _client,
        ttl: 60 * 60 * 24,
    }),
    cookie: {
        httpOnly: true,
        secure: false,
    },
};
app.set("port", process.env.PORT || 4000);
app.set("views", __dirname + "/../../client/build");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(cors_1.default({ origin: true, credentials: true }));
app
    .use(morgan_1.default("dev"))
    .use(express_1.default.static(path_1.default.join(__dirname, "../../client/build")))
    .use("/contents", express_1.default.static(path_1.default.join(__dirname, "/../contents")))
    .use(compression_1.default())
    .use(helmet_1.default.noSniff())
    .use(body_parser_1.default.json({ limit: "50mb" }))
    .use(helmet_1.default.xssFilter())
    .use(express_session_1.default(sessionConfig))
    .use(cookie_parser_1.default(process.env.SESSEION_KEY))
    .use(helmet_1.default.frameguard({ action: "deny" }))
    .use(body_parser_1.default.urlencoded({ extended: true, limit: "50mb" }))
    .use(csrfProtection);
app.use(function (req, res, next) {
    res.header("Cache-control", "no-cache, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Access-Control-Allow-Methods", "GET POST DELELTE");
    next();
});
// app.get("/", (req, res) => {
//    res.render("index.html");
// });
app.use("/api", router_1.default); //공통라우터
app.use("/topic", topic_1.default); //콘텐츠 관련 라우터
app.use("/admin", admin_1.default);
app.use(function (req, res, next) {
    res.status(404).send("Sorry cant find that!");
    next(http_errors_1.default(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    console.log(err);
});
app.listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});
//# sourceMappingURL=app.js.map