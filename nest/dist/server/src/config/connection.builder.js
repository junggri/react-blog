"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolConnction = exports.tempPoolConnction = void 0;
const temp_connetion_1 = require("./temp.connetion");
const topic_connection_1 = require("./topic.connection");
async function tempPoolConnction(query, dep) {
    const conn = await temp_connetion_1.default();
    if (conn !== undefined)
        try {
            const [result] = await conn.execute(query, dep);
            conn.release();
            return result;
        }
        catch (e) {
            console.log(e);
            conn.release();
            return { state: false };
        }
}
exports.tempPoolConnction = tempPoolConnction;
async function poolConnction(query, dep) {
    const conn = await topic_connection_1.default();
    if (conn !== undefined)
        try {
            const [result] = await conn.execute(query, dep);
            conn.release();
            return result;
        }
        catch (e) {
            console.log(e);
            conn.release();
            return { state: false };
        }
}
exports.poolConnction = poolConnction;
//# sourceMappingURL=connection.builder.js.map