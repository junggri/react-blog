import { PoolConnection } from "mysql2/promise";
import connection from "./topic.connection";

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