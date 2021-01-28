import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
import env from "../../../../server.env.json";

dotenv.config();


const option = {
   host: process.env.REACT_APP_DB_HOST,
   user: process.env.REACT_APP_DB_USER,
   password: env.DB_PWD,
   database: env.DB_DATABASE,
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
