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
var comment_connection_1 = __importDefault(require("../config/comment.connection"));
var sanitize_html_1 = __importDefault(require("sanitize-html"));
var cryptoPwd_1 = require("../lib/cryptoPwd");
var topic_model_1 = __importDefault(require("./topic.model"));
var sendMsg_1 = __importDefault(require("../lib/sendMsg"));
function makeDate() {
    var today = new Date();
    var dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return dateString;
}
function promiseArray(conn, query, dep) {
    return new Promise(function (resolve, reject) {
        resolve(conn.execute(query, dep));
    });
}
var indexModel = {
    createNewCommetTable: function (ref) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, table_name, query, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        table_name = ref.replace(/-/g, "_");
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        query = "\n               CREATE TABLE `" + table_name + "`(\n                  board int NOT NULL AUTO_INCREMENT PRIMARY KEY,\n                  parent int,\n                  bgroup int NOT NULL,\n                  sorts int NOT NULL,\n                  depth int NOT NULL,\n                  cmt varchar(2000) NOT NULL,\n                  writer varchar(45),\n                  created varchar(20) NOT NULL,\n                  pwd varchar(200) NOT NULL,\n                  salt varchar(150) NOT NULL\n               )\n            ";
                        return [4 /*yield*/, conn.execute(query)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        conn.release();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    getComment: function (postid) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        query = "\n                           SELECT board,parent,bgroup,sorts,depth,cmt,created,writer FROM \n                           `" + postid.replace(/-/g, "_") + "` \n                           order by bgroup asc, sorts asc\n                           ";
                        return [4 /*yield*/, conn.execute(query)];
                    case 3:
                        result = (_a.sent())[0];
                        conn.release();
                        return [2 /*return*/, { state: true, data: result }];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        conn.release();
                        return [2 /*return*/, { state: false }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    saveComment: function (postname, cmt, grp, topic, postid, writer, pwd) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sanitize_writer, sanitize_pwd, _cyrpto, query, dep, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        sanitize_writer = sanitize_html_1.default(writer);
                        sanitize_pwd = sanitize_html_1.default(pwd);
                        return [4 /*yield*/, cryptoPwd_1.cryptoPwd(sanitize_pwd)];
                    case 2:
                        _cyrpto = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        query = "INSERT INTO `" + postid.replace(/-/g, "_") + "` (bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?)";
                        dep = [grp, 0, 0, cmt, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                        return [4 /*yield*/, conn.execute(query, dep)];
                    case 4:
                        _a.sent();
                        conn.release();
                        sendMsg_1.default(postname, sanitize_writer, cmt);
                        return [4 /*yield*/, topic_model_1.default.increaseCmtCount(topic, postid)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, { state: true }];
                    case 6:
                        e_3 = _a.sent();
                        conn.release();
                        console.error(e_3);
                        return [2 /*return*/, { state: false }];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    saveReply: function (reply, bn, grp, sorts, depth, topic, postid, writer, pwd) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sanitize_writer, sanitize_pwd, _cyrpto, cmtPostid, sort_query, result, sort, zeroQuery, result_1, save_sort, save_query, dep, update_query, save_query, dep, getCommentData, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        sanitize_writer = sanitize_html_1.default(writer);
                        sanitize_pwd = sanitize_html_1.default(pwd);
                        return [4 /*yield*/, cryptoPwd_1.cryptoPwd(sanitize_pwd)];
                    case 2:
                        _cyrpto = _a.sent();
                        cmtPostid = postid.replace(/-/g, "_");
                        if (!(conn !== undefined)) return [3 /*break*/, 14];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 13, , 14]);
                        sort_query = "SELECT COALESCE (MIN(SORTS),0) FROM `" + cmtPostid + "`\n                                    WHERE BGROUP=" + grp + "\n                                    AND SORTS>" + sorts + "\n                                    AND DEPTH <= " + depth + "\n                                    ";
                        return [4 /*yield*/, conn.execute(sort_query)];
                    case 4:
                        result = (_a.sent())[0];
                        conn.release();
                        sort = result[0]["COALESCE (MIN(SORTS),0)"];
                        if (!(sort === 0)) return [3 /*break*/, 7];
                        zeroQuery = "SELECT COALESCE(MAX(SORTS),0) + 1 FROM `" + cmtPostid + "`\n                                       WHERE BGROUP=" + grp + "\n                                       ";
                        return [4 /*yield*/, conn.execute(zeroQuery)];
                    case 5:
                        result_1 = (_a.sent())[0];
                        conn.release();
                        save_sort = result_1[0]["COALESCE(MAX(SORTS),0) + 1"];
                        save_query = "INSERT INTO `" + cmtPostid + "` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)";
                        dep = [bn, grp, save_sort, depth + 1, reply, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                        return [4 /*yield*/, conn.execute(save_query, dep)];
                    case 6:
                        _a.sent();
                        conn.release();
                        return [3 /*break*/, 10];
                    case 7:
                        update_query = "UPDATE `" + cmtPostid + "` SET SORTS=SORTS+1\n                                     WHERE BGROUP=" + grp + " AND SORTS >= " + sort + "\n                                     ";
                        return [4 /*yield*/, conn.execute(update_query)];
                    case 8:
                        _a.sent();
                        conn.release();
                        save_query = "INSERT INTO `" + cmtPostid + "` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)";
                        dep = [bn, grp, sort, depth + 1, reply, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                        return [4 /*yield*/, conn.execute(save_query, dep)];
                    case 9:
                        _a.sent();
                        conn.release();
                        _a.label = 10;
                    case 10: return [4 /*yield*/, this.getComment(postid)];
                    case 11:
                        getCommentData = _a.sent();
                        return [4 /*yield*/, topic_model_1.default.increaseCmtCount(topic, postid)];
                    case 12:
                        _a.sent();
                        return [2 /*return*/, { state: true, data: getCommentData.data }];
                    case 13:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [2 /*return*/, { state: false }];
                    case 14: return [2 /*return*/];
                }
            });
        });
    },
    deleteCmtTable: function (postid) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        query = "DROP TABLE `" + postid.replace(/-/g, "_") + "`";
                        return [4 /*yield*/, conn.execute(query)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_5 = _a.sent();
                        console.error(e_5);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    deleteComment: function (writer, pwd, number, topic, postId, deleteArr) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, find_query, dep, result, state, query_1, promises, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 10];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 9, , 10]);
                        find_query = "select * from " + postId.replace(/-/g, "_") + " where board = ?";
                        dep = [number];
                        return [4 /*yield*/, conn.execute(find_query, dep)];
                    case 3:
                        result = (_a.sent())[0];
                        return [4 /*yield*/, cryptoPwd_1.decryptoPwd(result[0], pwd, writer)];
                    case 4:
                        state = _a.sent();
                        if (!state) return [3 /*break*/, 7];
                        query_1 = "DELETE FROM `" + postId.replace(/-/g, "_") + "` where board = ?";
                        promises = deleteArr.map(function (e) { return promiseArray(conn, query_1, [e]); });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, topic_model_1.default.decreaseCmtCount(topic, postId, deleteArr.length)];
                    case 6:
                        _a.sent();
                        conn.release();
                        return [2 /*return*/, { state: true }];
                    case 7:
                        conn.release();
                        return [2 /*return*/, { state: false }];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_6 = _a.sent();
                        console.error(e_6);
                        conn.release();
                        return [2 /*return*/, { state: false }];
                    case 10: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = indexModel;
