import connection from "../lib/index.connection";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";
import { ITextEditorProps } from "../../../client/src/modules/TextEditor/textEdit.interface";


let moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");


const contentModel = {
   getAllPosts: async () => {
      let conn: any = await connection();
      try {
         let [result] = await conn.query("show tables");
         return result;
      } catch (error) {
         console.error(error);
      } finally {
         conn.release();
      }
   },

   savePosts: async ({ contentName, content, topicName, kindOfPosts, detail }: ITextEditorProps) => {
      let conn = await connection();
      const uid = uuidv4();
      const today = new Date();
      const dateString = today.toLocaleDateString("ko-KR", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });

      const writePath = path.join(__dirname + "/../../contents");
      const query = `INSERT INTO ${topicName} (uid, content_name, created, modified, file, comments, kindOfPosts, detail, date) VALUES (?,?,?,?,?,?,?,?,?)`;
      if (conn !== undefined)
         try {
            await conn.execute(query, [uid, contentName, dateString, null, uid + ".html", null, kindOfPosts, detail, new Date()]);
            await fs.writeFile(`${writePath}/${uid}.html`, content, "utf8");
            return { state: true };
         } catch (error) {
            console.error(error);
         } finally {
            conn.release();
         }

   },

   getDataFromParams: async (params: string) => {
      const query = `select * from ${params} order by field(kindofPosts,'notice','posts') , created ASC`;
      let conn = await connection();
      if (conn !== undefined)
         try {
            let [result] = await conn.execute(query);
            return result;
         } catch (e) {
            console.error(e);
         } finally {
            conn.release();
         }
   },

   getPostFromPostId: async (params: any) => {
      const { topic, postsId } = params;
      let conn = await connection();
      if (conn !== undefined)
         try {
            let [result] = await conn.execute(`SELECT * FROM ${topic} where uid = ? `, [postsId]);
            return result;
         } catch (e) {
            console.error(e);
         } finally {
            conn.release();
         }
   },
};

export default contentModel;
