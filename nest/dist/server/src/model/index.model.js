"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_connection_1 = require("../config/comment.connection");
const sanitize_html_1 = require("sanitize-html");
const cryptoPwd_1 = require("../lib/cryptoPwd");
const content_model_1 = require("./content.model");
const sendMsg_1 = require("../lib/sendMsg");
const admin_connection_1 = require("../config/admin.connection");
const crypto_1 = require("crypto");
const util_1 = require("util");
const pbkdf2Promise = util_1.default.promisify(crypto_1.default.pbkdf2);
function makeDate() {
    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return dateString;
}
function promiseArray(conn, query, dep) {
    return new Promise((resolve, reject) => {
        resolve(conn.execute(query, dep));
    });
}
const indexModel = {
    async createNewCommetTable(ref) {
        const conn = await comment_connection_1.default();
        const table_name = ref.replace(/-/g, "_");
        if (conn !== undefined)
            try {
                const query = `
               CREATE TABLE \`${table_name}\`(
                  board int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  parent int,
                  bgroup int NOT NULL,
                  sorts int NOT NULL,
                  depth int NOT NULL,
                  cmt varchar(2000) NOT NULL,
                  writer varchar(45),
                  created varchar(20) NOT NULL,
                  pwd varchar(200) NOT NULL,
                  salt varchar(150) NOT NULL
               )
            `;
                await conn.execute(query);
            }
            catch (e) {
                console.error(e);
                conn.release();
            }
    },
    async getComment(postid) {
        const conn = await comment_connection_1.default();
        if (conn !== undefined)
            try {
                const query = `
                           SELECT board,parent,bgroup,sorts,depth,cmt,created,writer FROM 
                           \`${postid.replace(/-/g, "_")}\` 
                           order by bgroup asc, sorts asc
                           `;
                const [result] = await conn.execute(query);
                conn.release();
                return { state: true, data: result };
            }
            catch (e) {
                console.error(e);
                conn.release();
                return { state: false };
            }
    },
    async saveComment(_a) {
        var props = __rest(_a, []);
        const conn = await comment_connection_1.default();
        const sanitize_writer = sanitize_html_1.default(props.user);
        const sanitize_pwd = sanitize_html_1.default(props.pwd);
        const _cyrpto = await cryptoPwd_1.cryptoPwd(sanitize_pwd);
        if (conn !== undefined)
            try {
                const query = `INSERT INTO \`${props.postId.replace(/-/g, "_")}\` (bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?)`;
                const dep = [props.group, 0, 0, props.value, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                await conn.execute(query, dep);
                conn.release();
                if (process.env.NODE_ENV === "production")
                    sendMsg_1.default(props.contentName, sanitize_writer, props.value);
                await content_model_1.default.increaseCmtCount(props.topic, props.postId);
                return { state: true };
            }
            catch (e) {
                conn.release();
                console.error(e);
                return { state: false };
            }
    },
    async saveReply(_a) {
        var props = __rest(_a, []);
        const conn = await comment_connection_1.default();
        const sanitize_writer = sanitize_html_1.default(props.user);
        const sanitize_pwd = sanitize_html_1.default(props.pwd);
        const _cyrpto = await cryptoPwd_1.cryptoPwd(sanitize_pwd);
        const cmt_table_name = props.postId.replace(/-/g, "_");
        if (conn !== undefined)
            try {
                const sort_query = `SELECT COALESCE (MIN(SORTS),0) FROM \`${cmt_table_name}\`
                                WHERE BGROUP = ${props.grorp}
                                AND SORTS > ${props.sorts}
                                AND DEPTH <= ${props.depth}
            `;
                const [result] = await conn.execute(sort_query);
                conn.release();
                const sort = result[0]["COALESCE (MIN(SORTS),0)"];
                if (sort === 0) {
                    const zeroQuery = `SELECT COALESCE(MAX(SORTS),0) + 1 FROM \`${cmt_table_name}\`
                                  WHERE bgroup = ${props.grorp}
               `;
                    const [result] = await conn.execute(zeroQuery);
                    conn.release();
                    const save_sort = result[0]["COALESCE(MAX(SORTS),0) + 1"];
                    const save_query = `INSERT INTO \`${cmt_table_name}\` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)`;
                    const dep = [props.board, props.grorp, save_sort, props.depth + 1, props.value, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                    await conn.execute(save_query, dep);
                    conn.release();
                }
                else {
                    const update_query = `UPDATE \`${cmt_table_name}\` SET SORTS=SORTS+1
                                   WHERE bgroup=${props.grorp} AND sorts>=${sort}
               `;
                    await conn.execute(update_query);
                    conn.release();
                    const save_query = `INSERT INTO \`${cmt_table_name}\` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)`;
                    const dep = [props.board, props.grorp, sort, props.depth + 1, props.value, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                    await conn.execute(save_query, dep);
                    conn.release();
                }
                await content_model_1.default.increaseCmtCount(props.topic, props.postId);
                const getCommentData = await this.getComment(props.postId);
                return { state: true, data: getCommentData };
            }
            catch (e) {
                console.error(e);
                return { state: false };
            }
    },
    async deleteComment(data) {
        const conn = await comment_connection_1.default();
        if (conn !== undefined)
            try {
                const find_query = `SELECT * FROM \`${data.postsId.replace(/-/g, "_")}\` WHERE board = ?`;
                const dep = [data.board];
                const [result] = await conn.execute(find_query, dep);
                const state = await cryptoPwd_1.decryptoPwd(result[0], data.pwd, data.user);
                if (state) {
                    const query = `DELETE FROM \`${data.postsId.replace(/-/g, "_")}\` where board = ?`;
                    const promises = data.deleteArr.map(e => promiseArray(conn, query, [e]));
                    await Promise.all(promises);
                    conn.release();
                    await content_model_1.default.decreaseCmtCount(data.topic, data.postsId, data.deleteArr.length);
                    return { state: true };
                }
                else {
                    conn.release();
                    return { state: false };
                }
            }
            catch (e) {
                console.error(e);
                conn.release();
                return { state: false };
            }
    },
    async deleteCmtTable(postid) {
        const conn = await admin_connection_1.default();
        if (conn !== undefined)
            try {
                const query = `DROP TABLE \`${postid.replace(/-/g, "_")}\``;
                await conn.execute(query);
            }
            catch (e) {
                console.error(e);
            }
    },
    async login(data) {
        const conn = await admin_connection_1.default();
        if (conn !== undefined)
            try {
                const [result] = await conn.execute("select * from user where id=?", [data.id]);
                conn.release();
                if (!result.length)
                    return false;
                else {
                    const key = await pbkdf2Promise(data.pwd, result[0].salt, Number(process.env.CRYPTO_ITER), Number(process.env.CRYPTO_NUM), String(process.env.CRYPTO_ALGO));
                    return result[0].password === key.toString("base64");
                }
            }
            catch (e) {
                console.error(e);
                conn.release();
            }
    },
};
exports.default = indexModel;
//# sourceMappingURL=index.model.js.map