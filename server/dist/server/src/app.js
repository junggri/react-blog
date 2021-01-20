"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var session_config_1 = require("./config/session.config");
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var express_session_1 = __importDefault(require("express-session"));
var compression_1 = __importDefault(require("compression"));
var http_errors_1 = __importDefault(require("http-errors"));
var csurf_1 = __importDefault(require("csurf"));
var router_1 = __importDefault(require("./router"));
var topic_1 = __importDefault(require("./router/topic"));
var admin_1 = __importDefault(require("./router/admin"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.disable("x-powered-by");
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
var content_path = process.env.NODE_ENV === "development"
    ? "/../../contents"
    : "/../../../../contents";
app.use(function (req, res, next) {
    res.header("Cache-control", "no-cache, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Access-Control-Allow-Methods", "GET POST DELELTE");
    next();
});
app
    .use(morgan_1.default("dev"))
    .use(compression_1.default())
    .use(helmet_1.default.noSniff())
    .use(body_parser_1.default.json())
    .use(helmet_1.default.xssFilter())
    .use(express_session_1.default(session_config_1.sessionConfig))
    .use(cookie_parser_1.default(process.env.SESSEION_KEY))
    .use(helmet_1.default.frameguard({ action: "deny" }))
    .use(cors_1.default({ origin: true, credentials: true }))
    .use(body_parser_1.default.urlencoded({ extended: false }))
    .use(express_1.default.static(path_1.default.join(__dirname, "/../../../public")))
    .use(express_1.default.static(path_1.default.join(__dirname, "/../../../build")))
    .use("/contents", express_1.default.static(path_1.default.join(__dirname, content_path)))
    .use(csrfProtection);
app.use("/api", router_1.default); //공통라우터
app.use("/topic", topic_1.default); //콘텐츠 관련 라우터
app.use("/admin", admin_1.default);
if (process.env.NODE_ENV === "production")
    app.get("*", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "/../../../build/index.html"));
    });
app.set("port", process.env.PORT || 4000);
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
if (process.env.NODE_ENV !== "test") {
    app.listen(app.get("port"), function () {
        console.log("Express server listening on port " + app.get("port"));
    });
}
module.exports = app;
//# sourceMappingURL=app.js.map