import connection from "../config/topic.connection";
import tempConn from "../config/temp.connetion";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import { ITextInitialProps } from "../../../client/src/modules/TextEditor/textEdit.interface";
import path from "path";


let moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");


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
                     (uid, topic, content_name, created, modified, file, comments, kindOfPosts, detail, date) 
                     VALUES (?,?,?,?,?,?,?,?,?,?)`;
      dep = [uid, data.topicName, data.contentName, dateString, null, uid + ".html", null, data.kindOfPosts, data.detail, new Date()];
   } else {
      query = `INSERT INTO post 
                     (uid, topic, content_name, created, file, detail) 
                     VALUES (?,?,?,?,?,?)`;
      dep = [uid, data.topicName, data.contentName, dateString, uid + ".html", data.detail];
   }

   let _path = process.env.NODE_ENV === "development"
      ? `/../../../${folderName}`
      : `/../../../../../${folderName}`;

   const filePath = path.join(__dirname, _path, `${uid}.html`);

   return { uid, today, dateString, filePath, query, dep };
}

async function poolConnction<T>(query: string, dep?: T[]) {
   let conn = await connection();
   if (conn !== undefined)
      try {
         let [result] = await conn.execute(query, dep);
         conn.release();
         return result;
      } catch (e) {
         console.log(e);
         conn.release();
         return { state: false };
      }
}

const contentModel = {
   getAllPosts: async () => {
      return await poolConnction("show tables");
   },

   savePosts: async (data: ITextInitialProps) => {
      const saveData = savePost("contents", data);
      const result: any = await poolConnction<any>(saveData.query, saveData.dep);
      if (result) {
         await fs.writeFile(saveData.filePath, data.content, "utf8");
         return { state: true };
      } else if (!result.state) {
         return result;
      }
   },

   temporaryPosts: async (data: ITextInitialProps) => {
      let conn = await tempConn();
      const saveData = savePost("temporary-storage", data);
      if (conn !== undefined)
         try {
            let [result] = await conn.execute(saveData.query, saveData.dep);
            conn.release();
            if (result) {
               await fs.writeFile(saveData.filePath, data.content, "utf8");
               return { state: true };
            }
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
            return result;
         } catch (e) {
            console.log(e);
         }
   },

   getDataFromParams: async (params: string) => {
      const query = `select * from ${params} order by field(kindofPosts,'notice','posts') , created ASC`;
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
                     uid varchar(50) not null,
                     topic varchar(11) not null,
                     content_name varchar(200) not null,
                     detail varchar(200) not null,
                     file varchar(100) not null,
                     created varchar(20) not null,
                     modified varchar(20),
                     comments varchar(50),
                     kindofPosts varchar(20) not null,
                     date timestamp not null,
                     view int(11) DEFAULT 0, 
                     INDEX index_uid (uid)
                     )`;
      return await poolConnction(query);
   },

   getAllPostsItems: async () => {
      let conn = await connection();
      const dataObj: any = {};
      if (conn !== undefined)
         try {
            let time = new Date();
            let [result]: any = await conn.execute("show tables");
            conn.release();
            for (let i = 0; i < result.length; i++) {
               let [data]: any = await conn.execute(`select * from ${result[i]["Tables_in_contents"]} order by id ASC`);
               conn.release();
               if (data.length !== 0) dataObj[result[i]["Tables_in_contents"]] = data;
            }
            let time2 = new Date();
            console.log(time2.getTime() - time.getTime());
         } catch (e) {
            conn.release();
            console.log(e);
         }
      return dataObj;
   },

   deleteTopic: async (topicName: string) => {
      const query = `DROP TABLE ${topicName}`;
      return await poolConnction(query);
   },

   deletePost: async ({ uid, topic }: { uid: string, topic: string }) => {
      const conn = await connection();
      const query = `DELETE FROM ${topic} where uid = ? `;
      if (conn !== undefined)
         try {
            await conn.execute(query, [uid]);
            return true;
         } catch (e) {
            console.log(e);
            return false;
         }
   },
};

export default contentModel;