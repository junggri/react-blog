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
var index_connection_1 = __importDefault(require("../config/index.connection"));
var uuid_1 = require("uuid");
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
function poolConnction(query, dep) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_connection_1.default()];
                case 1:
                    conn = _a.sent();
                    if (!(conn !== undefined)) return [3 /*break*/, 5];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, conn.execute(query, dep)];
                case 3:
                    result = (_a.sent())[0];
                    conn.release();
                    return [2 /*return*/, result];
                case 4:
                    e_1 = _a.sent();
                    console.log(e_1);
                    conn.release();
                    return [2 /*return*/, { state: false }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var contentModel = {
    getAllPosts: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, poolConnction("show tables")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    savePosts: function (_a) {
        var contentName = _a.contentName, content = _a.content, topicName = _a.topicName, kindOfPosts = _a.kindOfPosts, detail = _a.detail;
        return __awaiter(void 0, void 0, void 0, function () {
            var uid, today, dateString, writePath, query, dep, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        uid = uuid_1.v4();
                        today = new Date();
                        dateString = today.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });
                        writePath = path_1.default.join(__dirname + "/../../contents");
                        query = "INSERT INTO " + topicName + " \n                     (uid, topic, content_name, created, modified, file, comments, kindOfPosts, detail, date) \n                     VALUES (?,?,?,?,?,?,?,?,?,?)";
                        dep = [uid, topicName, contentName, dateString, null, uid + ".html", null, kindOfPosts, detail, new Date()];
                        return [4 /*yield*/, poolConnction(query, dep)];
                    case 1:
                        result = _b.sent();
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs_1.promises.writeFile(writePath + "/" + uid + ".html", content, "utf8")];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, { state: true }];
                    case 3:
                        if (!result.state) {
                            return [2 /*return*/, result];
                        }
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getDataFromParams: function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "select * from " + params + " order by field(kindofPosts,'notice','posts') , created ASC";
                    return [4 /*yield*/, poolConnction(query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    getPostFromPostId: function (topic, postsId) { return __awaiter(void 0, void 0, void 0, function () {
        var query, dep;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "SELECT * FROM " + topic + " where uid = ?";
                    dep = [postsId];
                    return [4 /*yield*/, poolConnction(query, dep)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    CreateNewTopic: function (newTopic) { return __awaiter(void 0, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "CREATE TABLE " + newTopic + "(\n                     id int(11) not null auto_increment primary key,\n                     uid  varchar(50) not null,\n                     topic varchar(11) not null,\n                     content_name varchar(200) not null,\n                     created varchar(20) not null,\n                     modified varchar(20),\n                     file varchar(100) not null,\n                     comments varchar(50),\n                     detail varchar(200) not null,\n                     kindofPosts varchar(20) not null,\n                     date timestamp not null\n                     )";
                    return [4 /*yield*/, poolConnction(query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    getAllPostsItems: function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, test, dataArr, result, i, data, j, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_connection_1.default()];
                case 1:
                    conn = _a.sent();
                    test = {};
                    dataArr = [];
                    if (!(conn !== undefined)) return [3 /*break*/, 9];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 8, , 9]);
                    return [4 /*yield*/, conn.execute("show tables")];
                case 3:
                    result = (_a.sent())[0];
                    conn.release();
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < result.length)) return [3 /*break*/, 7];
                    return [4 /*yield*/, conn.execute("select * from " + result[i]["Tables_in_contents"] + " order by id ASC")];
                case 5:
                    data = (_a.sent())[0];
                    conn.release();
                    for (j = 0; j < data.length; j++) {
                        dataArr.push(data[j]);
                    }
                    _a.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 9];
                case 8:
                    e_2 = _a.sent();
                    conn.release();
                    console.log(e_2);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/, dataArr];
            }
        });
    }); },
    deleteTopic: function (topicName) { return __awaiter(void 0, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "DROP TABLE " + topicName;
                    return [4 /*yield*/, poolConnction(query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    deletePost: function (_a) {
        var uid = _a.uid, topic = _a.topic;
        return __awaiter(void 0, void 0, void 0, function () {
            var conn, query, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(uid, topic);
                        return [4 /*yield*/, index_connection_1.default()];
                    case 1:
                        conn = _b.sent();
                        query = "DELETE FROM " + topic + " where uid = ? ";
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, conn.execute(query, [uid])];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 4:
                        e_3 = _b.sent();
                        console.log(e_3);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = contentModel;
//# sourceMappingURL=topic.model.js.map