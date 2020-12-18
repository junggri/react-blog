import mysql from "mysql2/promise";

const option = {
   host: "localhost",
   user: "root",
   password: "wowwjd123",
   database: "contents",
   connectionLimit: 10,
   waitForConnections: true,
   multipleStatements: true,
};

async function getConnection() {
   try {
      let pool = mysql.createPool(option);
      let conn = await pool.getConnection();
      return conn;
   } catch (error) {
      console.error(error);
   }
}

export default getConnection;
