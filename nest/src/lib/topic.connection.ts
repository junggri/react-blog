import * as dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const option = {
   host: process.env.NODE_ENV === "development" ? process.env.DB_HOST : process.env.DB_HOST_PROD,
   user: process.env.NODE_ENV === "development" ? process.env.DB_USER : process.env.DB_USER_PROD,
   password: process.env.DB_PWD,
   database: process.env.DB_DATABASE2,
   connectionLimit: 40,
   waitForConnections: true,
};


async function getConnection() {
   try {
      const pool = mysql.createPool(option);
      console.log(pool);
      return await pool.getConnection();
   } catch (error) {
      console.error(error);
   }
}

export default getConnection;
