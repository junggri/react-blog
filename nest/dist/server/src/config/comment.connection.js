"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
const option = {
    host: process.env.NODE_ENV === "development" ? process.env.DB_HOST : process.env.DB_HOST_PROD,
    user: process.env.NODE_ENV === "development" ? process.env.DB_USER : process.env.DB_USER_PROD,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE4,
    waitForConnections: true,
};
async function getConnection() {
    try {
        let pool = promise_1.default.createPool(option);
        let conn = await pool.getConnection();
        return conn;
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = getConnection;
//# sourceMappingURL=comment.connection.js.map