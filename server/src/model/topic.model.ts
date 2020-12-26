import connection from "../config/index.connection";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";
import { ITextInitialProps } from "../../../client/src/modules/TextEditor/textEdit.interface";


let moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");


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

   savePosts: async ({ contentName, content, topicName, kindOfPosts, detail }: ITextInitialProps) => {
      const uid = uuidv4();
      const today = new Date();
      const dateString = today.toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
      const writePath = path.join(__dirname + "/../../contents");
      const query = `INSERT INTO ${topicName} 
                     (uid, topic, content_name, created, modified, file, comments, kindOfPosts, detail, date) 
                     VALUES (?,?,?,?,?,?,?,?,?,?)`;
      const dep = [uid, topicName, contentName, dateString, null, uid + ".html", null, kindOfPosts, detail, new Date()];
      const result: any = await poolConnction<any>(query, dep);
      if (result) {
         await fs.writeFile(`${writePath}/${uid}.html`, content, "utf8");
         return { state: true };
      } else if (!result.state) {
         return result;
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
      const query = `CREATE TABLE ${newTopic}(
                     Id int(11) not null auto_increment primary key,
                     uid  varchar(50) not null,
                     topic varchar(11) not null,
                     content_name varchar(200) not null,
                     created varchar(20) not null,
                     modified varchar(20),
                     file varchar(100) not null,
                     comments varchar(50),
                     detail varchar(200) not null,
                     kindofPosts varchar(20) not null,
                     date timestamp not null
                     )`;
      return await poolConnction(query);
   },

   getAllPostsItems: async () => {
      let conn = await connection();
      const dataArr: any[] = [];
      if (conn !== undefined)
         try {
            let [result]: any = await conn.execute("show tables");
            conn.release();
            for (let i = 0; i < result.length; i++) {
               let [data]: any = await conn.execute(`select * from ${result[i]["Tables_in_contents"]} order by id ASC`);
               conn.release();
               for (let j = 0; j < data.length; j++) {
                  dataArr.push(data[j]);
               }
            }
         } catch (e) {
            conn.release();
            console.log(e);
         }
      return dataArr;
   },

   deleteTopic: async (topicName: string) => {
      const query = `DROP TABLE ${topicName}`;
      return await poolConnction(query);
   },

   deletePost: async ({ uid, topic }: { uid: string, topic: string }) => {
      console.log(uid, topic);
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

