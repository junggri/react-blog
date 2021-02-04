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
var uuid_1 = require("uuid");
var indexModel = {
    getComment: function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        query = "SELECT * FROM board order by bgroup asc, sorts asc";
                        return [4 /*yield*/, conn.execute(query)];
                    case 3:
                        result = (_a.sent())[0];
                        conn.release();
                        return [2 /*return*/, { state: true, data: result }];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        conn.release();
                        return [2 /*return*/, { state: false }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    saveComment: function (cmt, grp) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, uid, query, dep, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        uid = uuid_1.v4();
                        query = "INSERT INTO BOARD (bgroup,sorts,depth,cmt) VALUES (?,?,?,?)";
                        dep = [grp, 0, 0, cmt];
                        return [4 /*yield*/, conn.execute(query, dep)];
                    case 3:
                        _a.sent();
                        conn.release();
                        return [2 /*return*/, { state: true }];
                    case 4:
                        e_2 = _a.sent();
                        conn.release();
                        console.error(e_2);
                        return [2 /*return*/, { state: false }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    saveReply: function (reply, bn, grp, sorts, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sort_query, result, sort, zeroQuery, result_1, save_sort, save_query, dep, update_query, save_query, dep, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(bn);
                        return [4 /*yield*/, comment_connection_1.default()];
                    case 1:
                        conn = _a.sent();
                        if (!(conn !== undefined)) return [3 /*break*/, 11];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 10, , 11]);
                        console.log("sorts", sorts, "depth", depth);
                        sort_query = "SELECT COALESCE (MIN(SORTS),0) FROM BOARD\n                                WHERE BGROUP=" + grp + "\n                                AND SORTS>" + sorts + "\n                                AND DEPTH <= " + depth + "\n                                ";
                        return [4 /*yield*/, conn.execute(sort_query)];
                    case 3:
                        result = (_a.sent())[0];
                        conn.release();
                        sort = result[0]["COALESCE (MIN(SORTS),0)"];
                        if (!(sort === 0)) return [3 /*break*/, 6];
                        zeroQuery = "SELECT COALESCE(MAX(SORTS),0) + 1 FROM BOARD\n                                  WHERE BGROUP=" + grp + "\n                                  ";
                        return [4 /*yield*/, conn.execute(zeroQuery)];
                    case 4:
                        result_1 = (_a.sent())[0];
                        conn.release();
                        save_sort = result_1[0]["COALESCE(MAX(SORTS),0) + 1"];
                        save_query = "INSERT INTO BOARD (parent,bgroup,sorts,depth,cmt) VALUES (?,?,?,?,?)";
                        dep = [bn, grp, save_sort, depth + 1, reply];
                        return [4 /*yield*/, conn.execute(save_query, dep)];
                    case 5:
                        _a.sent();
                        conn.release();
                        return [3 /*break*/, 9];
                    case 6:
                        update_query = "UPDATE BOARD SET SORTS=SORTS+1\n                                     WHERE BGROUP=" + grp + " AND SORTS >= " + sort + "\n                                    ";
                        return [4 /*yield*/, conn.execute(update_query)];
                    case 7:
                        _a.sent();
                        conn.release();
                        save_query = "INSERT INTO BOARD (parent,bgroup,sorts,depth,cmt) VALUES (?,?,?,?,?)";
                        dep = [bn, grp, sort, depth + 1, reply];
                        return [4 /*yield*/, conn.execute(save_query, dep)];
                    case 8:
                        _a.sent();
                        conn.release();
                        _a.label = 9;
                    case 9: return [2 /*return*/, { state: true }];
                    case 10:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [2 /*return*/, { state: false }];
                    case 11: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = indexModel;
