import mysql, { PoolConnection } from "mysql2/promise";

let option = {
   host: "localhost",
   user: "root",
   password: "wowwjd123",
   database: "contents",
   connectionLimit: 40,
   waitForConnections: true,
   multipleStatements: true,
};

async function getConnection() {
   try {
      let pool = mysql.createPool(option);
      let conn: PoolConnection | undefined = await pool.getConnection();
      return conn;
   } catch (error) {
      console.error(error);
   }
}

export default getConnection;
