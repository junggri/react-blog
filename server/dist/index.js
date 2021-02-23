"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_session_1 = __importDefault(require("express-session"));
var session_1 = __importDefault(require("./config/session"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var middlewares_1 = require("./lib/middlewares");
var app = express_1.default();
app.disable("x-powered-by");
app
    .use(middlewares_1.header)
    .use(morgan_1.default("dev"))
    .use(compression_1.default())
    .use(helmet_1.default.noSniff())
    .use(body_parser_1.default.json())
    .use(helmet_1.default.xssFilter())
    .use(express_session_1.default(session_1.default))
    .use(cookie_parser_1.default(process.env.SESSEION_KEY))
    .use(helmet_1.default.frameguard({ action: "deny" }))
    .use(cors_1.default({ origin: true, credentials: true }))
    .use("/thumbnail", express_1.default.static(path_1.default.resolve("../thumbnail")))
    .use(body_parser_1.default.urlencoded({ extended: false }))
    .use(middlewares_1.csrfProtection);
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    console.log(err);
});
app.listen(5000, function () {
    console.log("running on 5000 and start server");
});
//# sourceMappingURL=index.js.map