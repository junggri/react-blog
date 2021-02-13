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
var topic_model_1 = __importDefault(require("../model/topic.model"));
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
function makePath(folderName, fileName) {
    var _path = path_1.default.resolve("../" + folderName);
    var filePath = _path + ("/" + fileName + ".html");
    return { filePath: filePath, _path: _path };
}
var contentController = {
    getContentName: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.getAllTopic()];
                case 1:
                    result = _a.sent();
                    if (result.state) {
                        res.status(200).json(result.data);
                    }
                    else {
                        res.status(404).json({ state: false });
                    }
                    return [2 /*return*/];
            }
        });
    }); },
    savePosts: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.savePosts(req.body)];
                case 1:
                    result = _a.sent();
                    result.state
                        ? res.status(200).json({ state: true })
                        : res.status(500).json({ state: false });
                    return [2 /*return*/];
            }
        });
    }); },
    modifyPost: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _path, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _path = makePath("contents", req.body.uid);
                        return [4 /*yield*/, topic_model_1.default.modify(req.body)];
                    case 1:
                        result = _a.sent();
                        if (!result.state) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs_1.promises.writeFile(_path.filePath, req.body.data.content, "utf8")];
                    case 2:
                        _a.sent();
                        res.status(200).json({ state: true });
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(500).json({ state: false });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    saveTempPost: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _path, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _path = makePath("temporary-storage", req.body.uid);
                    return [4 /*yield*/, topic_model_1.default.saveTempPost(req.body)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, fs_1.promises.unlink(_path.filePath)];
                case 2:
                    _a.sent();
                    result.state
                        ? res.status(200).json({ state: true })
                        : res.status(500).json({ state: false });
                    return [2 /*return*/];
            }
        });
    }); },
    temporaryPost: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.temporaryPosts(req.body)];
                case 1:
                    result = _a.sent();
                    result.state
                        ? res.status(200).json({ state: true })
                        : res.status(404).json({ state: false });
                    return [2 /*return*/];
            }
        });
    }); },
    getTempPost: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.getTemporaryPost()];
                case 1:
                    result = _a.sent();
                    result.state
                        ? res.status(200).json(result.data)
                        : res.status(404).json({ state: false });
                    return [2 /*return*/];
            }
        });
    }); },
    getTempPostFromId: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _path, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _path = makePath("temporary-storage", req.params.tempId);
                        return [4 /*yield*/, fs_1.promises.readFile(_path.filePath, "utf-8")];
                    case 1:
                        data = _a.sent();
                        res.status(200).json(data);
                        return [2 /*return*/];
                }
            });
        });
    },
    getPostsFromTopicName: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.getDataFromParams(decodeURIComponent(req.params.topic))];
                case 1:
                    result = _a.sent();
                    result.state
                        ? res.status(200).json(result.data)
                        : res.status(404).json({ state: false });
                    return [2 /*return*/];
            }
        });
    }); },
    getPostsFromPostsId: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _path, _a, topic, postsId, result, content;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _path = makePath("contents", req.params.postsId);
                    _a = req.params, topic = _a.topic, postsId = _a.postsId;
                    return [4 /*yield*/, topic_model_1.default.getPostFromPostId(decodeURIComponent(topic), postsId)];
                case 1:
                    result = _b.sent();
                    if (!result.state) return [3 /*break*/, 3];
                    return [4 /*yield*/, fs_1.promises.readFile(_path.filePath, "utf-8")];
                case 2:
                    content = _b.sent();
                    res.status(200).json({ content: content, result: result.data });
                    return [3 /*break*/, 4];
                case 3:
                    res.status(404).json({ state: false });
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    makeNewTopic: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.CreateNewTopic(req.body.newTopic)];
                case 1:
                    result = _a.sent();
                    result.state
                        ? res.status(200).json({ state: true })
                        : res.status(404).json({ state: false });
                    return [2 /*return*/];
            }
        });
    }); },
    getAllPostsItems: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.getAllPostsItems()];
                case 1:
                    result = _a.sent();
                    res.status(200).json(result);
                    return [2 /*return*/];
            }
        });
    }); },
    deleteTopic: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, topic_model_1.default.deleteTopic(req.body.topicName)];
                case 1:
                    result = _a.sent();
                    result.state
                        ? res.status(200).json({ state: true })
                        : res.status(404).json({ state: false });
                    return [2 /*return*/];
            }
        });
    }); },
    deletePost: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _path, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _path = makePath("contents", req.body.uid);
                    return [4 /*yield*/, topic_model_1.default.deletePost(req.body)];
                case 1:
                    result = _a.sent();
                    if (!result.state) return [3 /*break*/, 3];
                    return [4 /*yield*/, fs_1.promises.unlink(_path.filePath)];
                case 2:
                    _a.sent();
                    res.status(200).json({ state: true });
                    return [3 /*break*/, 4];
                case 3:
                    res.status(404).json({ state: false });
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    deleteTempPost: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _path, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _path = makePath("temporary-storage", req.body.uid);
                        return [4 /*yield*/, topic_model_1.default.deleteTempPost(req.body)];
                    case 1:
                        result = _a.sent();
                        if (!result.state) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs_1.promises.unlink(_path.filePath)];
                    case 2:
                        _a.sent();
                        res.status(200).json({ state: true });
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(404).json({ state: false });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = contentController;
