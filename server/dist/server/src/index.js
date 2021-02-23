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
var topic_model_1 = __importDefault(require("../src/model/topic.model"));
var graphql_1 = require("graphql");
var express_graphql_1 = require("express-graphql");
var router_1 = __importDefault(require("../src/router"));
var topic_1 = __importDefault(require("../src/router/topic"));
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
var schema = graphql_1.buildSchema("\n     type Query{\n      name:Int\n      Allposts:[Allposts]\n    }\n\n   type Allposts{\n      id: Int\n      comment: Int\n      uid: String\n      content_name: String\n      date: String\n      created: String\n      file: String\n      detail:String\n      thumbnail:String\n      kindOfPosts: String\n      modified: String\n      topic: String\n   }\n");
var root = {
    Allposts: function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.getAllPostsItems()];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, result];
            }
        });
    }); },
    csrf: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, res.status(200).json({ token: req.csrfToken() })];
        });
    }); },
};
app.use("/graphql", express_graphql_1.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.use("/api", router_1.default); //공통라우터
app.use("/topic", topic_1.default); //콘텐츠 관련 라우터
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