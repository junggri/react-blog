import connection from "../lib/index.connection";
import {v4 as uuidv4} from "uuid";
import {promises as fs} from "fs";
import path from "path";

let moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const contentModel = {
   get_all_topics: async () => {
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

   save_content: async ({contentName, content,}: { contentName: string; content: string; }) => {
      let conn = await connection();
      const uid = uuidv4();
      const writePath = path.join(__dirname + "/../../contents");
      const time = moment().format("YYYY-MM-DD");
      const query = `INSERT INTO nodejs(uid, content_name, created, modified, file, comments) VALUES (?,?,?,?,?,?)`;
      const queryValue = [uid, contentName, time, null, uid + ".html", null,]

      if (conn !== undefined)
         try {
            await fs.writeFile(`${writePath}/${uid}.html`, content, "utf8");
            await conn.execute(query, queryValue);
            return {state: true};
         } catch (error) {
            console.error(error);
            return {state: false};
         } finally {
            conn.release();
         }
   },
};

export default contentModel;
