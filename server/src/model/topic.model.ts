import connection from "../lib/index.connection";
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
         console.error(e);
         conn.release();
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
                     (uid, content_name, created, modified, file, comments, kindOfPosts, detail, date) 
                     VALUES (?,?,?,?,?,?,?,?,?)`;
      const dep = [uid, contentName, dateString, null, uid + ".html", null, kindOfPosts, detail, new Date()];

      await poolConnction<any>(query, dep);
      await fs.writeFile(`${writePath}/${uid}.html`, content, "utf8");
      return { state: true };
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
                     content_name varchar(120) not null,
                     created varchar(20) not null,
                     modified varchar(20),
                     file varchar(100) not null,
                     comments varchar(50),
                     detail varchar(50) not null,
                     kindofPosts varchar(20) not null,
                     date timestamp not null
                     )`;
      return await poolConnction(query);
   },

   getAllPostsItems: async () => {
      const dataArr: any[] = [];
      const tables: any = await poolConnction("show tables");
      for (let i = 0; i < tables.length; i++) {
         let result: any = await poolConnction(`select * from ${tables[i]["Tables_in_contents"]} order by id ASC`);
         for (let j = 0; j < result.length; j++) {
            dataArr.push(result[j]);
         }
      }
      return dataArr;
   },
};

export default contentModel;

