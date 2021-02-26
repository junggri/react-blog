import connection from "../config/topic.connection";
import tempConnection from "../config/temp.connetion";
import path from "path";
import { promises as fs } from "fs";
import { RowDataPacket } from "mysql2";
import { PoolConnection } from "mysql2/promise";
import { ITextInitialProps } from "../interace";
import saveDataCommonProcess from "../lib/saveDataCommonProcess";
import indexModel from "./index.model";

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
   const conn: PoolConnection | undefined = await connection();
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
      try {
         const query = `SHOW TABLES`;
         const result: any = await poolConnction(query);
         return result.data;
      } catch (e) {
         console.error(e);
      }
   }

   static async getTemporaryPost() {
      try {
         const conn: PoolConnection | undefined = await tempConnection();
         const [result]: any = await conn?.execute("select * from post");
         return result;
      } catch (e) {
         console.error(e);
      }
   }

   static async getTemporaryContent(uid: string) {
      try {
         const _path = makePath("temporary-storage", uid);
         const data = await fs.readFile(_path.filePath, "utf-8");
         return { content: data };
      } catch (e) {
         console.error(e);
      }
   }

   static async savePost(data: ITextInitialProps) {
      try {
         const saveData = saveDataCommonProcess("contents", data.input);
         await poolConnction<any>(saveData.query, saveData.dep);
         await fs.writeFile(saveData.filePath, data.input.content, "utf8");
         await indexModel.createNewCommetTable(saveData.uid);
         return { state: true };
      } catch (e) {
         console.error(e);
      }
   }

   static async saveTemporaryPost(data: ITextInitialProps) {
      const saveData = saveDataCommonProcess("temporary-storage", data.input);
      const conn: PoolConnection | undefined = await tempConnection();
      if (conn !== undefined)
         try {
            await conn.execute(saveData.query, saveData.dep);
            await fs.writeFile(saveData.filePath, data.input.content, "utf8");
            conn.release();
            return { state: true };
         } catch (e) {
            console.error(e);
            conn.release();
         }
   }

   static async createTopic(input: { topic: string }) {
      try {
         const query = `
                CREATE TABLE \`${input.topic}\`(
                     id int(11) not null auto_increment primary key,
                     topic varchar(11) not null,
                     uid varchar(50) not null,
                     content_name varchar(200) not null,
                     detail varchar(200) not null,
                     thumbnail varchar(25),
                     file varchar(100) not null,
                     created varchar(20) not null,
                     modified varchar(20),
                     kindofPosts varchar(20) not null,
                     date timestamp not null,
                     comment int(11) DEFAULT 0, 
                     INDEX index_uid (uid)
                     )`;
         await poolConnction(query);
         return { state: true };
      } catch (e) {
         console.error(e);
      }
   }

   static async deleteTopic(input: { topic: string }) {
      try {
         const query: string = `DROP TABLE \`${input.topic}\``;
         await poolConnction(query);
         return { state: true };
      } catch (e) {
         console.error(e);
      }
   }

   static async deletePost({ topic, identifier }: { topic: string, identifier: string }) {
      try {
         const query = `DELETE FROM \`${topic}\` WHERE uid=?`;
         const dep = [identifier];
         await poolConnction(query, dep);
         await indexModel.deleteCmtTable(identifier);
         return { state: true };
      } catch (e) {
         console.error(e);
      }
   }

   static async deleteTemporaryPost(input: { identifier: string }) {
      const conn: PoolConnection | undefined = await tempConnection();
      if (conn !== undefined)
         try {
            const query = "DELETE FROM post WHERE uid = ?";
            const dep = [input.identifier];
            await conn.execute(query, dep);
            conn.release();
            return { state: true };
         } catch (e) {
            console.error(e);
         }
   }
}


export default topicModel;