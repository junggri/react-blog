import connection from "../config/topic.connection";
import tempConnection from "../config/temp.connetion";
import path from "path";
import { promises as fs } from "fs";
import { PoolConnection } from "mysql2/promise";
import { ITextInitialProps } from "../interace";
import saveDataCommonProcess from "../lib/saveDataCommonProcess";
import indexModel from "./index.model";
import { poolConnction, tempPoolConnction } from "../config/connection.builder";

function makePath<T>(folderName: T, fileName: T) {
   let _path = path.resolve(`../${folderName}`);
   const filePath = _path + `/${fileName}.html`;
   return { filePath: filePath, _path: _path };
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
      let content = await fs.readFile(_path.filePath, "utf-8");
      return ({ content, result });
   }

   static async getTableName() {
      try {
         const query = `SHOW TABLES`;
         const result: any = await poolConnction(query);
         return result;
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

   static async getDataFromMode(identifier: string, topic: string | undefined) {
      let _path = topic === "undefined"
         ? makePath<string>("temporary-storage", identifier)
         : makePath<string>("contents", identifier);
      const content = await fs.readFile(_path.filePath, "utf-8");
      try {
         if (topic === "undefined") {
            const query = "SELECT * FROM post WHERE uid = ?";
            const dep = [identifier];
            const [result]: any = await tempPoolConnction<string>(query, dep);
            return { result, content };
         } else {
            const query = `SELECT * FROM ${topic} WHERE uid = ?`;
            const dep = [identifier];
            const [result]: any = await poolConnction<string>(query, dep);
            return { result, content };
         }
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

   static async getPostDataForUpdate(uid: string) {
      try {
         const _path = makePath("contents", uid);
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
            if (data.input.identifier === "undefined") {
               await conn.execute(saveData.query, saveData.dep);
               await fs.writeFile(saveData.filePath, data.input.content, "utf8");
            } else {
               const [result]: any = await conn.execute(`select 1 from post where uid =?`, [data.input.identifier]);
               if (result[0][1] === 1) {
                  const query = `UPDATE post SET content_name = ? , detail = ? WHERE uid = ?`;
                  const dep = [data.input.contentName, data.input.detail, data.input.identifier];
                  await conn.execute(query, dep);
                  await fs.writeFile(path.resolve(`../temporary-storage`) + `/${data.input.identifier}.html`, data.input.content, "utf8");
                  conn.release();
               } else {
                  return { state: false };
               }
               return { state: true };
            }
         } catch (e) {
            console.error(e);
            conn.release();
         }
   }

   static async deleteTemporaryPostAndSavePost(data: ITextInitialProps) {
      const _path = makePath("temporary-storage", data.input.identifier);
      const saveData = saveDataCommonProcess("contents", data.input);
      const query = `DELETE FROM post WHERE uid=?`;
      const dep = [data.input.identifier];
      try {
         await poolConnction(saveData.query, saveData.dep);
         await tempPoolConnction(query, dep);
         await fs.unlink(_path.filePath);
         await fs.writeFile(saveData.filePath, data.input.content, "utf8");
         await indexModel.createNewCommetTable(saveData.uid);
         return { state: true };
      } catch (e) {
         console.error(e);
         return { state: false };
      }
   }

   static async updatePost(data: ITextInitialProps) {
      let _path = makePath("contents", data.input.identifier);
      const today: Date = new Date();
      const dateString = today.toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
      const query = `UPDATE ${data.input.topicName} SET content_name = ?, topic = ?, kindofPosts = ?, detail = ?, modified = ? WHERE uid = ?`;
      const dep = [data.input.contentName, data.input.topicName, data.input.kindofPosts, data.input.detail, dateString, data.input.identifier];
      await fs.writeFile(_path.filePath, data.input.content, "utf8");
      return await poolConnction(query, dep);
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
      let _path = makePath("contents", identifier);
      try {
         const query = `DELETE FROM \`${topic}\` WHERE uid=?`;
         const dep = [identifier];
         await poolConnction(query, dep);
         await fs.unlink(_path.filePath);
         await indexModel.deleteCmtTable(identifier);
         return { state: true };
      } catch (e) {
         console.error(e);
      }
   }

   static async deleteTemporaryPost(input: { identifier: string }) {
      const conn: PoolConnection | undefined = await tempConnection();
      let _path = makePath("temporary-storage", input.identifier);
      if (conn !== undefined)
         try {
            const query = "DELETE FROM post WHERE uid = ?";
            const dep = [input.identifier];
            await fs.unlink(_path.filePath);
            await conn.execute(query, dep);
            conn.release();
            return { state: true };
         } catch (e) {
            console.error(e);
         }
   }
}


export default topicModel;