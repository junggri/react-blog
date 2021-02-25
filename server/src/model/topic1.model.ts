import connection from "../config/topic.connection";
import path from "path";
import { promises as fs } from "fs";
import { RowDataPacket } from "mysql2";

function makePath<T>(folderName: T, fileName: T) {
   let _path = path.resolve(`../${folderName}`);
   const filePath = _path + `/${fileName}.html`;
   return { filePath: filePath, _path: _path };
}

interface IResult extends RowDataPacket {
   state: boolean
   data?: any
}

async function poolConnction<T>(query: string, dep?: T[]) {
   const conn = await connection();
   if (conn !== undefined)
      try {
         const [result] = await conn.execute(query, dep);
         conn.release();
         return { state: true, data: result };
      } catch (e) {
         console.log(e);
         conn.release();
         return { state: false };
      }
}

class topicModel {
   static async getAllPosts() {
      const conn = await connection();
      if (conn !== undefined)
         try {
            let _query: string = "";
            const [tables]: any = await conn.execute("show tables");
            conn.release();
            tables.forEach((e: any, idx: number) => {
               tables.length - 1 !== idx
                  ? _query += `select * from ${e["Tables_in_contents"]} union `
                  : _query += `select * from ${e["Tables_in_contents"]}`;
            });
            const [posts] = await conn.execute(_query);
            conn.release();
            return posts;
         } catch (e) {
            conn.release();
            console.log(e);
         }
   }

   static async getPostData(topic: string, postId: string) {
      const _path = makePath<string>("contents", postId);
      const query = `SELECT * from ${decodeURIComponent(topic)} where uid = ?`;
      const dep = [postId];
      const result: any = await poolConnction(query, dep);
      if (result.state) {
         let content = await fs.readFile(_path.filePath, "utf-8");
         return ({ content: content, result: result.data });
      } else {
         return ({ state: false });
      }
   }

   static async getTableName() {
      const query = `SHOW TABLES`;
      const result: any = await poolConnction(query);
      return result.data;
   }
}

export default topicModel;