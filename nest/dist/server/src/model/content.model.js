"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topic_connection_1 = require("../config/topic.connection");
const temp_connetion_1 = require("../config/temp.connetion");
const temp_connetion_2 = require("../config/temp.connetion");
const saveDataCommonProcess_1 = require("../lib/saveDataCommonProcess");
const connection_builder_1 = require("../config/connection.builder");
const fs_1 = require("fs");
const index_model_1 = require("./index.model");
const path_1 = require("path");
function makePath(folderName, fileName) {
    let _path = path_1.default.resolve(`../${folderName}`);
    const filePath = _path + `/${fileName}.html`;
    return { filePath: filePath, _path: _path };
}
const contentModel = {
    async getAllPosts() {
        const conn = await topic_connection_1.default();
        if (conn !== undefined)
            try {
                let _query = "";
                const [tables] = await conn.execute("show tables");
                conn.release();
                tables.forEach((e, idx) => {
                    tables.length - 1 !== idx
                        ? _query += `select * from ${e["Tables_in_contents"]} union `
                        : _query += `select * from ${e["Tables_in_contents"]}`;
                });
                const [posts] = await conn.execute(_query);
                conn.release();
                return posts;
            }
            catch (e) {
                conn.release();
                console.log(e);
            }
    },
    async getTemporaryPost(uid) {
        const query = `SELECT * FROM post WHERE uid = ?`;
        const dep = [uid];
        return await connection_builder_1.tempPoolConnction(query, dep);
    },
    async getPost(topic, uid) {
        const query = `SELECT * FROM ${decodeURIComponent(topic)} where uid = ?`;
        const dep = [uid];
        return await connection_builder_1.poolConnction(query, dep);
    },
    async getTopicAndTemporaryPost() {
        try {
            const query = `SHOW TABLES`;
            const tables = await connection_builder_1.poolConnction(query);
            const posts = await connection_builder_1.tempPoolConnction("select * from post");
            return { tables, posts };
        }
        catch (e) {
            console.error(e);
            return { state: false };
        }
    },
    async increaseCmtCount(topic, postid) {
        const conn = await topic_connection_1.default();
        if (conn !== undefined)
            try {
                const query = `UPDATE ${topic} set comment = comment+1 where uid = ?`;
                const dep = [postid];
                await conn.execute(query, dep);
                conn.release();
            }
            catch (e) {
                console.error(e);
                conn.release();
            }
    },
    async decreaseCmtCount(topic, postid, length) {
        const conn = await topic_connection_1.default();
        if (conn !== undefined)
            try {
                const [result] = await conn.execute(`select comment from ${topic} where uid = ?`, [postid]);
                if (result[0].comment - 1 >= 0) {
                    const query = `UPDATE ${topic} set comment = comment-${length} where uid = ?`;
                    const dep = [postid];
                    await conn.execute(query, dep);
                }
                conn.release();
            }
            catch (e) {
                console.error(e);
                conn.release();
            }
    },
    async savePost(data) {
        const saveData = saveDataCommonProcess_1.default("contents", data);
        const result = await connection_builder_1.poolConnction(saveData.query, saveData.dep);
        await fs_1.promises.writeFile(saveData.filePath, data.content, "utf8");
        await index_model_1.default.createNewCommetTable(saveData.uid);
        return { state: true };
    },
    async saveTemporaryPost(data, uid) {
        const saveData = saveDataCommonProcess_1.default("temporary-storage", data);
        const conn = await temp_connetion_1.default();
        if (conn !== undefined)
            try {
                if (uid === undefined) {
                    await conn.execute(saveData.query, saveData.dep);
                    await fs_1.promises.writeFile(saveData.filePath, data.content, "utf8");
                }
                else {
                    const [result] = await conn.execute(`select 1 from post where uid =?`, [uid]);
                    if (result[0][1] === 1) {
                        const query = `UPDATE post SET content_name = ? , detail = ? WHERE uid = ?`;
                        const dep = [data.contentName, data.detail, uid];
                        await conn.execute(query, dep);
                        await fs_1.promises.writeFile(path_1.default.resolve(`../temporary-storage`) + `/${uid}.html`, data.content, "utf8");
                        conn.release();
                    }
                    else {
                        return { state: false };
                    }
                }
                return { state: true };
            }
            catch (e) {
                console.error(e);
                conn.release();
            }
    },
    async deleteTemporaryPostAndSavePost(params, data) {
        const _path = makePath("temporary-storage", params.tempId);
        const saveData = saveDataCommonProcess_1.default("contents", data);
        const query = `DELETE FROM post WHERE uid=?`;
        const dep = [params.tempId];
        try {
            await connection_builder_1.poolConnction(saveData.query, saveData.dep);
            await connection_builder_1.tempPoolConnction(query, dep);
            await fs_1.promises.unlink(_path.filePath);
            await fs_1.promises.writeFile(saveData.filePath, data.content, "utf8");
            await index_model_1.default.createNewCommetTable(saveData.uid);
            return { state: true };
        }
        catch (e) {
            console.error(e);
        }
    },
    async createNewTopic(topicName) {
        const query = `
                CREATE TABLE ${topicName}(
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
        return await connection_builder_1.poolConnction(query);
    },
    async updatePost(params, data) {
        const _path = makePath("contents", params.postId);
        const dateString = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const query = `UPDATE ${data.topicName} SET content_name = ?, topic = ?, kindofPosts = ?, detail = ?, modified = ? WHERE uid = ?`;
        const dep = [data.contentName, data.topicName, data.kindofPosts, data.detail, dateString, params.postId];
        await fs_1.promises.writeFile(_path.filePath, data.content, "utf8");
        await connection_builder_1.poolConnction(query, dep);
        return { state: true };
    },
    deletePost: async ({ uid, topic }) => {
        const query = `DELETE FROM ${topic} where uid = ? `;
        try {
            await index_model_1.default.deleteCmtTable(uid);
            await connection_builder_1.poolConnction(query, [uid]);
            return { state: true };
        }
        catch (e) {
            return { state: false };
        }
    },
    async deleteTemporaryPost(uid) {
        const conn = await temp_connetion_2.default();
        const query = `DELETE FROM post where uid = ?`;
        const dep = [uid];
        if (conn !== undefined)
            try {
                await conn.execute(query, dep);
                conn.release();
                return { state: true };
            }
            catch (e) {
                console.log(e);
                return { statet: false };
            }
    },
    async deleteTopic(topic) {
        try {
            const query = `DROP TABLE \`${topic}\``;
            await connection_builder_1.poolConnction(query);
            return { state: true };
        }
        catch (e) {
            console.error(e);
            return { state: false };
        }
    },
};
exports.default = contentModel;
//# sourceMappingURL=content.model.js.map