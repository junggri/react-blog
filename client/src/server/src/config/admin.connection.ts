import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
import env from "../../../../server.env.json";

dotenv.config();


const option = {
   host: process.env.NODE_ENV === "development"
      ? env.DB_HOST_DEV
      : env.DB_HOST_PROD,

   user: process.env.NODE_ENV === "development"
      ? env.DB_USER_DEV
      : env.DB_USER_PROD,

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
