import connection from "../config/topic.connection";
import tempConn from "../config/temp.connetion";
import indexModel from "./index.model";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";
import { ITextInitialProps } from "../../../modules/TextEditor/textEdit.interface";


function savePost(folderName: string, data: ITextInitialProps) {
   let query, dep;
   const uid = uuidv4();
   const today = new Date();
   const dateString = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
   });
   if (folderName === "contents") {
      query = `INSERT INTO ${data.topicName} 
               (uid, topic, content_name, created, modified, file, kindofPosts, detail, thumbnail, date, comment) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
      dep = [uid, data.topicName, data.contentName, dateString, null, uid + ".html", data.kindofPosts, data.detail, data.thumbnail, new Date(), 0];
   } else {
      query = `INSERT INTO post 
               (uid, topic, content_name, created, file, detail) 
               VALUES (?,?,?,?,?,?)`;
      dep = [uid, data.topicName, data.contentName, dateString, uid + ".html", data.detail];
   }

   let _path = path.resolve(`../${folderName}`);

   const filePath = _path + `/${uid}.html`;
   return { uid, today, dateString, filePath, query, dep };
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

const contentModel = {
   async increaseCmtCount<T, U>(topic: T, postid: U) {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const query = `UPDATE ${topic} set comment = comment+1 where uid = ?`;
            const dep = [postid];
            await conn.execute(query, dep);
            conn.release();
         } catch (e) {
            console.error(e);
            conn.release();
         }
   },

   async decreaseCmtCount<T, U>(topic: T, postid: U, length: number) {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const [result]: any = await conn.execute(`select comment from ${topic} where uid = ?`, [postid]);
            if (result[0].comment >= 1) {
               const query = `UPDATE ${topic} set comment = comment-${length} where uid = ?`;
               const dep = [postid];
               await conn.execute(query, dep);
            }
            conn.release();
         } catch (e) {
            console.error(e);
            conn.release();
         }
   },

   getAllTopic: async () => {//토픽목록 가져오기
      return await poolConnction("show tables");
   },

   savePosts: async (data: ITextInitialProps) => {
      const saveData = savePost("contents", data);
      const result: any = await poolConnction<any>(saveData.query, saveData.dep);
      await fs.writeFile(saveData.filePath, data.content, "utf8");
      await indexModel.createNewCommetTable(saveData.uid);
      return result;
   },

   async saveTempPost({ data, uid }: { data: ITextInitialProps, uid: string }) {
      let conn = await tempConn();
      const saveData = savePost("contents", data);
      if (conn !== undefined)
         try {
            await poolConnction<any>(saveData.query, saveData.dep);
            await conn.execute("DELETE FROM post where uid = ? ", [uid]);
            await fs.writeFile(saveData.filePath, data.content, "utf8");
            conn.release();
            return { state: true };
         } catch (e) {
            conn.release();
            console.error(e);
            return { state: false };
         }
   },

   async modify({ data, uid }: { data: ITextInitialProps, uid: string }) {
      const today = new Date();
      const dateString = today.toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
      const query = `UPDATE ${data.topicName} SET content_name = ?, topic = ?, kindofPosts = ?, detail = ?, modified = ? WHERE uid = ?`;
      const dep = [data.contentName, data.topicName, data.kindofPosts, data.detail, dateString, uid];
      return await poolConnction<string>(query, dep);
   },

   temporaryPosts: async ({ data, id }: { data: ITextInitialProps, id: string }) => {
      let conn = await tempConn();
      const saveData = savePost("temporary-storage", data);
      if (conn !== undefined)
         try {
            if (id === undefined) {
               await conn.execute(saveData.query, saveData.dep);
               await fs.writeFile(saveData.filePath, data.content, "utf8");
               conn.release();
            } else {
               const [result]: any = await conn.execute(`select * from post where uid = ?`, [id]);
               if (result.length) {
                  //exist temp post data so update post
                  const query = `UPDATE post SET content_name = ? , detail = ? WHERE uid = ?`;
                  const dep = [data.contentName, data.detail, id];
                  await conn.execute(query, dep);
                  await fs.writeFile(path.resolve(`../temporary-storage`) + `/${id}.html`, data.content, "utf8");
                  conn.release();
               } else {
                  //doesnt exist data. in this case return false
                  return { state: false };
               }
            }
            return { state: true };
         } catch (e) {
            conn.release();
            console.error(e);
            return { state: false };
         }
   },

   getTemporaryPost: async () => {
      let conn = await tempConn();
      if (conn !== undefined)
         try {
            const [result] = await conn.execute("select * from post");
            conn.release();
            return { state: true, data: result };
         } catch (e) {
            console.log(e);
            return false;
         }
   },

   getDataFromParams: async (params: string) => {
      const query = `select * from ${params} order by field(kindofPosts,'notice','posts') , date DESC`;
      return await poolConnction(query);
   },

   getPostFromPostId: async (topic: string, postsId: string) => {
      const query = `SELECT * FROM ${topic} where uid = ?`;
      const dep = [postsId];
      return await poolConnction<string>(query, dep);
   },

   CreateNewTopic: async (newTopic: string) => {
      const query = `
                CREATE TABLE ${newTopic}(
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
      return await poolConnction(query);
   },

   getAllPostsItems: async () => {
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
      ;
   },

   deleteTopic: async (topicName: string) => {
      const query = `DROP TABLE ${topicName}`;
      return await poolConnction(query);
   },

   deletePost: async ({ uid, topic }: { uid: string, topic: string }) => {
      const query = `DELETE FROM ${topic} where uid = ? `;
      await indexModel.deleteCmtTable(uid);
      return await poolConnction(query, [uid]);
   },

   async deleteTempPost({ uid }: { uid: string }) {
      const conn = await tempConn();
      const query = `DELETE FROM post where uid = ?`;
      const dep = [uid];
      if (conn !== undefined)
         try {
            await conn.execute(query, dep);
            conn.release();
            return { state: true };
         } catch (e) {
            console.log(e);
            return { statet: false };
         }
   },
};

export default contentModel;