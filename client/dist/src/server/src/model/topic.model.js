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
var topic_connection_1 = __importDefault(require("../config/topic.connection"));
var temp_connetion_1 = __importDefault(require("../config/temp.connetion"));
var index_model_1 = __importDefault(require("./index.model"));
var uuid_1 = require("uuid");
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
function savePost(folderName, data) {
    var query, dep;
    var uid = uuid_1.v4();
    var today = new Date();
    var dateString = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    if (folderName === "contents") {
        query = "INSERT INTO " + data.topicName + " \n               (uid, topic, content_name, created, modified, file, kindofPosts, detail, thumbnail, date, comment) \n                VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        dep = [uid, data.topicName, data.contentName, dateString, null, uid + ".html", data.kindofPosts, data.detail, data.thumbnail, new Date(), 0];
    }
    else {
        query = "INSERT INTO post \n               (uid, topic, content_name, created, file, detail) \n               VALUES (?,?,?,?,?,?)";
        dep = [uid, data.topicName, data.contentName, dateString, uid + ".html", data.detail];
    }
    var _path = path_1.default.resolve("../" + folderName);
    var filePath = _path + ("/" + uid + ".html");
    return { uid: uid, today: today, dateString: dateString, filePath: filePath, query: query, dep: dep };
}
function poolConnction(query, dep) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_connection_1.default()];
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
                    return [2 /*return*/, { state: true, data: result }];
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
    increaseCmtCount: function (topic, postid) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, dep, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, topic_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        query = "UPDATE " + topic + " set comment = comment+1 where uid = ?";
                        dep = [postid];
                        return [4 /*yield*/, conn.execute(query, dep)];
                    case 3:
                        _a.sent();
                        conn.release();
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        conn.release();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    decreaseCmtCount: function (topic, postid, length) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, result, query, dep, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, topic_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, conn.execute("select comment from " + topic + " where uid = ?", [postid])];
                    case 3:
                        result = (_a.sent())[0];
                        if (!(result[0].comment >= 1)) return [3 /*break*/, 5];
                        query = "UPDATE " + topic + " set comment = comment-" + length + " where uid = ?";
                        dep = [postid];
                        return [4 /*yield*/, conn.execute(query, dep)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        conn.release();
                        return [3 /*break*/, 7];
                    case 6:
                        e_3 = _a.sent();
                        console.error(e_3);
                        conn.release();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    getAllTopic: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, poolConnction("show tables")];
                case 1: //토픽목록 가져오기
                return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    savePosts: function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var saveData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    saveData = savePost("contents", data);
                    return [4 /*yield*/, poolConnction(saveData.query, saveData.dep)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, fs_1.promises.writeFile(saveData.filePath, data.content, "utf8")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, index_model_1.default.createNewCommetTable(saveData.uid)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    saveTempPost: function (_a) {
        var data = _a.data, uid = _a.uid;
        return __awaiter(this, void 0, void 0, function () {
            var conn, saveData, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, temp_connetion_1.default()];
                    case 1:
                        conn = _b.sent();
                        saveData = savePost("contents", data);
                        if (!(conn !== undefined)) return [3 /*break*/, 7];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, poolConnction(saveData.query, saveData.dep)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, conn.execute("DELETE FROM post where uid = ? ", [uid])];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, fs_1.promises.writeFile(saveData.filePath, data.content, "utf8")];
                    case 5:
                        _b.sent();
                        conn.release();
                        return [2 /*return*/, { state: true }];
                    case 6:
                        e_4 = _b.sent();
                        conn.release();
                        console.error(e_4);
                        return [2 /*return*/, { state: false }];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    modify: function (_a) {
        var data = _a.data, uid = _a.uid;
        return __awaiter(this, void 0, void 0, function () {
            var today, dateString, query, dep;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        today = new Date();
                        dateString = today.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });
                        query = "UPDATE " + data.topicName + " SET content_name = ?, topic = ?, kindofPosts = ?, detail = ?, modified = ? WHERE uid = ?";
                        dep = [data.contentName, data.topicName, data.kindofPosts, data.detail, dateString, uid];
                        return [4 /*yield*/, poolConnction(query, dep)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    temporaryPosts: function (_a) {
        var data = _a.data, id = _a.id;
        return __awaiter(void 0, void 0, void 0, function () {
            var conn, saveData, result, query, dep, e_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, temp_connetion_1.default()];
                    case 1:
                        conn = _b.sent();
                        saveData = savePost("temporary-storage", data);
                        if (!(conn !== undefined)) return [3 /*break*/, 12];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 11, , 12]);
                        if (!(id === undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, conn.execute(saveData.query, saveData.dep)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, fs_1.promises.writeFile(saveData.filePath, data.content, "utf8")];
                    case 4:
                        _b.sent();
                        conn.release();
                        return [3 /*break*/, 10];
                    case 5: return [4 /*yield*/, conn.execute("select * from post where uid = ?", [id])];
                    case 6:
                        result = (_b.sent())[0];
                        if (!result.length) return [3 /*break*/, 9];
                        query = "UPDATE post SET content_name = ? , detail = ? WHERE uid = ?";
                        dep = [data.contentName, data.detail, id];
                        return [4 /*yield*/, conn.execute(query, dep)];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, fs_1.promises.writeFile(path_1.default.resolve("../temporary-storage") + ("/" + id + ".html"), data.content, "utf8")];
                    case 8:
                        _b.sent();
                        conn.release();
                        return [3 /*break*/, 10];
                    case 9: 
                    //doesnt exist data. in this case return false
                    return [2 /*return*/, { state: false }];
                    case 10: return [2 /*return*/, { state: true }];
                    case 11:
                        e_5 = _b.sent();
                        conn.release();
                        console.error(e_5);
                        return [2 /*return*/, { state: false }];
                    case 12: return [2 /*return*/];
                }
            });
        });
    },
    getTemporaryPost: function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, result, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, temp_connetion_1.default()];
                case 1:
                    conn = _a.sent();
                    if (!(conn !== undefined)) return [3 /*break*/, 5];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, conn.execute("select * from post")];
                case 3:
                    result = (_a.sent())[0];
                    conn.release();
                    return [2 /*return*/, { state: true, data: result }];
                case 4:
                    e_6 = _a.sent();
                    console.log(e_6);
                    return [2 /*return*/, false];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    getDataFromParams: function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "select * from " + params + " order by field(kindofPosts,'notice','posts') , date DESC";
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
                    query = "\n                CREATE TABLE " + newTopic + "(\n                     id int(11) not null auto_increment primary key,\n                     topic varchar(11) not null,\n                     uid varchar(50) not null,\n                     content_name varchar(200) not null,\n                     detail varchar(200) not null,\n                     thumbnail varchar(25),\n                     file varchar(100) not null,\n                     created varchar(20) not null,\n                     modified varchar(20),\n                     kindofPosts varchar(20) not null,\n                     date timestamp not null,\n                     comment int(11) DEFAULT 0, \n                     INDEX index_uid (uid)\n                     )";
                    return [4 /*yield*/, poolConnction(query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    getAllPostsItems: function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, _query_1, tables_1, posts, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_connection_1.default()];
                case 1:
                    conn = _a.sent();
                    if (!(conn !== undefined)) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    _query_1 = "";
                    return [4 /*yield*/, conn.execute("show tables")];
                case 3:
                    tables_1 = (_a.sent())[0];
                    conn.release();
                    tables_1.forEach(function (e, idx) {
                        tables_1.length - 1 !== idx
                            ? _query_1 += "select * from " + e["Tables_in_contents"] + " union "
                            : _query_1 += "select * from " + e["Tables_in_contents"];
                    });
                    return [4 /*yield*/, conn.execute(_query_1)];
                case 4:
                    posts = (_a.sent())[0];
                    conn.release();
                    return [2 /*return*/, posts];
                case 5:
                    e_7 = _a.sent();
                    conn.release();
                    console.log(e_7);
                    return [3 /*break*/, 6];
                case 6:
                    ;
                    return [2 /*return*/];
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
            var query;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        query = "DELETE FROM " + topic + " where uid = ? ";
                        return [4 /*yield*/, index_model_1.default.deleteCmtTable(uid)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, poolConnction(query, [uid])];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    deleteTempPost: function (_a) {
        var uid = _a.uid;
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, dep, e_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, temp_connetion_1.default()];
                    case 1:
                        conn = _b.sent();
                        query = "DELETE FROM post where uid = ?";
                        dep = [uid];
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, conn.execute(query, dep)];
                    case 3:
                        _b.sent();
                        conn.release();
                        return [2 /*return*/, { state: true }];
                    case 4:
                        e_8 = _b.sent();
                        console.log(e_8);
                        return [2 /*return*/, { statet: false }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = contentModel;
