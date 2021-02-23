import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();


const option = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PWD,
   database: process.env.DB_DATABASE4,
   waitForConnections: true,
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
