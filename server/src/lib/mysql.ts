import mysql from "mysql2/promise";

const option = {
  host: "localhost",
  user: "test",
  password: "wowwjd123",
  database: "test",
  connectionLimit: 10,
  waitForConnections: true,
  multipleStatements: false,
};

async function getConnection() {
  let pool = mysql.createPool(option);
  try {
    let connection = await pool.getConnection();
    return connection;
  } catch (error) {
    console.error(error);
  }
}

export default getConnection;
