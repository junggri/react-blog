"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const path_1 = require("path");
function savePost(folderName, data) {
    let query, dep;
    const uid = uuid_1.v4();
    const today = new Date();
    const dateString = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    if (folderName === "contents") {
        query = `INSERT INTO ${data.topicName} 
               (uid, topic, content_name, created, modified, file, kindofPosts, detail, thumbnail, date, comment) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
        dep = [uid, data.topicName, data.contentName, dateString, null, uid + ".html", data.kindofPosts, data.detail, data.thumbnail, new Date(), 0];
    }
    else {
        query = `INSERT INTO post 
               (uid, topic, content_name, created, file, detail) 
               VALUES (?,?,?,?,?,?)`;
        dep = [uid, data.topicName, data.contentName, dateString, uid + ".html", data.detail];
    }
    let _path = path_1.default.resolve(`../${folderName}`);
    const filePath = _path + `/${uid}.html`;
    return { uid, today, dateString, filePath, query, dep };
}
exports.default = savePost;
//# sourceMappingURL=saveDataCommonProcess.js.map