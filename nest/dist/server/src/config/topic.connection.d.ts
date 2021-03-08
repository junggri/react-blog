import mysql from "mysql2/promise";
declare function getConnection(): Promise<mysql.PoolConnection>;
export default getConnection;
