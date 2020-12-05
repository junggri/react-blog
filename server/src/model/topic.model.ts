import connection from "../lib/index.connection";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";

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

   savePosts: async ({ contentName, content, topic }: { contentName: string; content: string, topic: string }) => {
      let conn = await connection();
      const uid = uuidv4();
      const today = new Date();
      const dateString = today.toLocaleDateString("ko-KR", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });

      // const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
      const writePath = path.join(__dirname + "/../../contents");

      const query = `INSERT INTO ${topic} (uid, content_name, created, modified, file, comments) VALUES (?,?,?,?,?,?)`;

      if (conn !== undefined)
         try {
            await fs.writeFile(`${writePath}/${uid}.html`, content, "utf8");
            await conn.execute(query, [uid, contentName, dateString, null, uid + ".html", null]);
            return { state: true };
         } catch (error) {
            console.error(error);
            return { state: false };
         } finally {
            conn.release();
         }

   },

   getDataFromParams: async (params: string) => {
      let conn = await connection();
      if (conn !== undefined)
         try {
            let [result] = await conn.execute(`SELECT * FROM ${params}`);
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
