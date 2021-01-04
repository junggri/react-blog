"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = exports.logger = void 0;
var fs_1 = __importDefault(require("fs"));
var winston_1 = __importDefault(require("winston"));
var moment_1 = __importDefault(require("moment"));
var _a = winston_1.default.format, combine = _a.combine, label = _a.label, printf = _a.printf;
var logDir = __dirname + "/../logs";
var date = moment_1.default().format("YYYY-MM-DD HH:mm:ss");
var myFormat = printf(function (_a) {
    var level = _a.level, message = _a.message, label = _a.label;
    return date + " [" + label + "] " + level + ": " + message; // log 출력 포맷 정의
});
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir);
}
var infoTransport = new winston_1.default.transports.File({
    level: "info",
    filename: "info.log",
    dirname: logDir,
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5,
    format: combine(label({ label: "info_log" }), myFormat),
});
var errorTransport = new winston_1.default.transports.File({
    level: "error",
    filename: "error.log",
    dirname: logDir,
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5,
});
var logger = winston_1.default.createLogger({
    transports: [infoTransport, errorTransport],
});
exports.logger = logger;
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston_1.default.transports.Console({
        level: "debug",
        handleExceptions: true,
        format: combine(label({ label: "console" }), myFormat),
    }));
}
var stream = {
    write: function (message) {
        logger.info(message);
    },
};
exports.stream = stream;
//# sourceMappingURL=winston.js.map