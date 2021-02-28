import { PoolConnection } from "mysql2/promise";
import tempConnection from "./temp.connetion";
import connection from "./topic.connection";

export async function tempPoolConnction<T>(query: string, dep?: T[]) {
   const conn: PoolConnection | undefined = await tempConnection();
   if (conn !== undefined)
      try {
         const [result] = await conn.execute(query, dep);
         conn.release();
         return result;
      } catch (e) {
         console.log(e);
         conn.release();
         return { state: false };
      }
}

export async function poolConnction<T>(query: string, dep?: T[]) {
   const conn: PoolConnection | undefined = await connection();
   if (conn !== undefined)
      try {
         const [result] = await conn.execute(query, dep);
         conn.release();
         return result;
      } catch (e) {
         console.log(e);
         conn.release();
         return { state: false };
      }
}