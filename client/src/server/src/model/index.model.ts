import connection from "../config/comment.connection";
import sanitize from "sanitize-html";
import { cryptoPwd, decryptoPwd } from "../lib/cryptoPwd";
import contentModel from "./topic.model";

function makeDate() {
   const today = new Date();
   const dateString = today.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
   });
   return dateString;
}

function promiseArray(conn: any, query: string, dep: number[]) {
   return new Promise((resolve, reject) => {
      resolve(conn.execute(query, dep));
   });
}

const indexModel = {
   async createNewCommetTable(ref: string) {
      const conn = await connection();
      const table_name = ref.replace(/-/g, "_");
      if (conn !== undefined)
         try {
            const query = `
               CREATE TABLE \`${table_name}\`(
                  board int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  parent int,
                  bgroup int NOT NULL,
                  sorts int NOT NULL,
                  depth int NOT NULL,
                  cmt varchar(2000) NOT NULL,
                  writer varchar(45),
                  created varchar(20) NOT NULL,
                  pwd varchar(200) NOT NULL,
                  salt varchar(150) NOT NULL
               )
            `;
            await conn.execute(query);
         } catch (e) {
            console.error(e);
            conn.release();
         }
   },

   async getComment(postid: string) {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const query = `
                           SELECT board,parent,bgroup,sorts,depth,cmt,created,writer FROM 
                           \`${postid.replace(/-/g, "_")}\` 
                           order by bgroup asc, sorts asc
                           `;
            const [result] = await conn.execute(query);
            conn.release();
            return { state: true, data: result };
         } catch (e) {
            console.error(e);
            conn.release();
            return { state: false };
         }
   },

   async saveComment(cmt: string, grp: number, topic: string, postid: string, writer: string, pwd: string) {
      const conn = await connection();
      const sanitize_writer = sanitize(writer);
      const sanitize_pwd = sanitize(pwd);
      const _cyrpto = await cryptoPwd(sanitize_pwd);
      if (conn !== undefined)
         try {
            const query = `INSERT INTO \`${postid.replace(/-/g, "_")}\` (bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?)`;
            const dep = [grp, 0, 0, cmt, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
            await conn.execute(query, dep);
            conn.release();
            await contentModel.increaseCmtCount<string, string>(topic, postid);
            return { state: true };
         } catch (e) {
            conn.release();
            console.error(e);
            return { state: false };
         }
   },

   async saveReply(reply: string, bn: number, grp: number, sorts: number, depth: number, topic: string, postid: string, writer: string, pwd: string) {
      const conn = await connection();
      const sanitize_writer = sanitize(writer);
      const sanitize_pwd = sanitize(pwd);
      const _cyrpto = await cryptoPwd(sanitize_pwd);
      const cmtPostid = postid.replace(/-/g, "_");
      if (conn !== undefined)
         try {
            const sort_query = `SELECT COALESCE (MIN(SORTS),0) FROM \`${cmtPostid}\`
                                    WHERE BGROUP=${grp}
                                    AND SORTS>${sorts}
                                    AND DEPTH <= ${depth}
                                    `;
            const [result]: any = await conn.execute(sort_query);
            conn.release();
            const sort = result[0]["COALESCE (MIN(SORTS),0)"];//sort => 0이면 첫 댓글 아니먄 대댓글 즉 글의 대한 소트이다
            if (sort === 0) {
               const zeroQuery = `SELECT COALESCE(MAX(SORTS),0) + 1 FROM \`${cmtPostid}\`
                                       WHERE BGROUP=${grp}
                                       `;
               const [result]: any = await conn.execute(zeroQuery);
               conn.release();
               const save_sort = result[0]["COALESCE(MAX(SORTS),0) + 1"];//save_sort => 답글에 대한 sort를 구
               const save_query = `INSERT INTO \`${cmtPostid}\` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)`;
               const dep = [bn, grp, save_sort, depth + 1, reply, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
               await conn.execute(save_query, dep);
               conn.release();
            } else {
               const update_query = `UPDATE \`${cmtPostid}\` SET SORTS=SORTS+1
                                     WHERE BGROUP=${grp} AND SORTS >= ${sort}
                                     `;
               await conn.execute(update_query);
               conn.release();
               const save_query = `INSERT INTO \`${cmtPostid}\` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)`;
               const dep = [bn, grp, sort, depth + 1, reply, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
               await conn.execute(save_query, dep);
               conn.release();
            }
            const getCommentData: any = await this.getComment(postid);
            await contentModel.increaseCmtCount<string, string>(topic, postid);
            return { state: true, data: getCommentData.data };
         } catch (e) {
            console.error(e);
            return { state: false };
         }
   },

   async deleteCmtTable(postid: string) {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const query = `DROP TABLE \`${postid.replace(/-/g, "_")}\``;
            await conn.execute(query);
         } catch (e) {
            console.error(e);
         }
   },


   async deleteComment(writer: string, pwd: string, number: string, topic: string, postId: string, deleteArr: number[]) {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const find_query = `select * from ${postId.replace(/-/g, "_")} where board = ?`;
            const dep = [number];
            const [result]: any = await conn.execute(find_query, dep);
            const state: boolean = await decryptoPwd(result[0], pwd, writer);
            if (state) {
               const query = `DELETE FROM \`${postId.replace(/-/g, "_")}\` where board = ?`;
               const promises = deleteArr.map(e => promiseArray(conn, query, [e]));
               await Promise.all(promises);
               await contentModel.decreaseCmtCount<string, string>(topic, postId, deleteArr.length);
               conn.release();
               return { state: true };
            } else {
               conn.release();
               return { state: false };
            }
         } catch (e) {
            console.error(e);
            conn.release();
            return { state: false };
         }
   },
};

export default indexModel;
