"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var csurf_1 = __importDefault(require("csurf"));
var server_env_json_1 = __importDefault(require("../server.env.json"));
var PreloadContext_1 = __importDefault(require("./lib/PreloadContext"));
var react_redux_1 = require("react-redux");
var store_1 = require("./lib/store");
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./shared/App"));
var server_1 = __importDefault(require("react-dom/server"));
var createPage_1 = __importDefault(require("./lib/createPage"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var body_parser_1 = __importDefault(require("body-parser"));
var express_session_1 = __importDefault(require("express-session"));
var session_config_1 = require("./server/src/config/session.config");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./server/src/router"));
var topic_1 = __importDefault(require("./server/src/router/topic"));
var admin_1 = __importDefault(require("./server/src/router/admin"));
var styled_components_1 = require("styled-components");
var GlobalStyles_1 = __importDefault(require("./styles/GlobalStyles"));
// @ts-ignore
var app = express_1.default();
app.disable("x-powered-by");
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
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
    .use(cookie_parser_1.default(server_env_json_1.default.SESSEION_KEY))
    .use(helmet_1.default.frameguard({ action: "deny" }))
    .use(cors_1.default({ origin: true, credentials: true }))
    .use(body_parser_1.default.urlencoded({ extended: false }))
    .use(csrfProtection);
app.use("/api", router_1.default); //공통라우터
app.use("/topic", topic_1.default); //콘텐츠 관련 라우터
app.use("/admin", admin_1.default);
var serverRender = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var sheet, context, preloadContext, jsx, e_1, root, styles, stateString, stateScript;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sheet = new styled_components_1.ServerStyleSheet();
                context = {};
                preloadContext = { done: false, promises: [] };
                jsx = (react_1.default.createElement(PreloadContext_1.default.Provider, { value: preloadContext },
                    react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
                        react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
                            react_1.default.createElement(GlobalStyles_1.default, null),
                            react_1.default.createElement(App_1.default, null)))));
                server_1.default.renderToStaticMarkup(jsx);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Promise.all(preloadContext.promises)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                return [2 /*return*/, res.status(500)];
            case 4:
                preloadContext.done = true;
                root = server_1.default.renderToString(sheet.collectStyles(jsx));
                styles = sheet.getStyleTags();
                stateString = JSON.stringify(store_1.store.getState()).replace(/</g, "\\u003c");
                stateScript = "<script>__PRELOADED_STATE__=" + stateString + "</script>";
                res.send(createPage_1.default(root, stateScript, styles));
                return [2 /*return*/];
        }
    });
}); };
var serve = express_1.default.static(path_1.default.resolve("./build"), { index: false });
app.use(serve);
app.get("*", serverRender);
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    console.log(err);
});
app.listen(4000, function () {
    console.log("running on 4000 and start server");
});
