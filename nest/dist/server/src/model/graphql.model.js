"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const temp_connetion_1 = require("../config/temp.connetion");
const path_1 = require("path");
const fs_1 = require("fs");
const index_model_1 = require("./index.model");
const connection_builder_1 = require("../config/connection.builder");
function makePath(folderName, fileName) {
    let _path = path_1.default.resolve(`../${folderName}`);
    const filePath = _path + `/${fileName}.html`;
    return { filePath: filePath, _path: _path };
}
class topicModel {
    static async getDataFromMode(identifier, topic) {
        let _path = topic === "undefined"
            ? makePath("temporary-storage", identifier)
            : makePath("contents", identifier);
        const content = await fs_1.promises.readFile(_path.filePath, "utf-8");
        try {
            if (topic === "undefined") {
                const query = "SELECT * FROM post WHERE uid = ?";
                const dep = [identifier];
                const [result] = await connection_builder_1.tempPoolConnction(query, dep);
                return { result, content };
            }
            else {
                const query = `SELECT * FROM ${topic} WHERE uid = ?`;
                const dep = [identifier];
                const [result] = await connection_builder_1.poolConnction(query, dep);
                return { result, content };
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    static async getTemporaryContent(uid) {
        try {
            const _path = makePath("temporary-storage", uid);
            const data = await fs_1.promises.readFile(_path.filePath, "utf-8");
            return { content: data };
        }
        catch (e) {
            console.error(e);
        }
    }
    static async getPostDataForUpdate(uid) {
        try {
            const _path = makePath("contents", uid);
            const data = await fs_1.promises.readFile(_path.filePath, "utf-8");
            return { content: data };
        }
        catch (e) {
            console.error(e);
        }
    }
    static async createTopic(input) {
        try {
            const query = `
                CREATE TABLE \`${input.topic}\`(
                     id int(11) not null auto_increment primary key,
                     topic varchar(11) not null,
                     uid varchar(50) not null,
                     content_name varchar(200) not null,
                     detail varchar(200) not null,
                     thumbnail varchar(25),
                     file varchar(100) not null,
                     created varchar(20) not null,
                     modified varchar(20),
                     kindofPosts varchar(20) not null,
                     date timestamp not null,
                     comment int(11) DEFAULT 0, 
                     INDEX index_uid (uid)
                     )`;
            await connection_builder_1.poolConnction(query);
            return { state: true };
        }
        catch (e) {
            console.error(e);
        }
    }
    static async deletePost({ topic, identifier }) {
        let _path = makePath("contents", identifier);
        try {
            const query = `DELETE FROM \`${topic}\` WHERE uid=?`;
            const dep = [identifier];
            await connection_builder_1.poolConnction(query, dep);
            await fs_1.promises.unlink(_path.filePath);
            await index_model_1.default.deleteCmtTable(identifier);
            return { state: true };
        }
        catch (e) {
            console.error(e);
        }
    }
    static async deleteTemporaryPost(input) {
        const conn = await temp_connetion_1.default();
        let _path = makePath("temporary-storage", input.identifier);
        if (conn !== undefined)
            try {
                const query = "DELETE FROM post WHERE uid = ?";
                const dep = [input.identifier];
                await fs_1.promises.unlink(_path.filePath);
                await conn.execute(query, dep);
                conn.release();
                return { state: true };
            }
            catch (e) {
                console.error(e);
            }
    }
}
exports.default = topicModel;
//# sourceMappingURL=graphql.model.js.map