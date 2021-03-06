import connection from "../config/comment.connection";
import sanitize from "sanitize-html";
import { cryptoPwd, decryptoPwd } from "../lib/cryptoPwd";
import contentModel from "./content.model";
import { PoolConnection } from "mysql2/promise";
import { ICommentDeletDataProps, ISaveCommentProps, ISaveReplyProps } from "../interace";
import sendMsg from "../lib/sendMsg";
import Adminconnection from "../config/admin.connection";
import crypto from "crypto";
import util from "util";

const pbkdf2Promise = util.promisify(crypto.pbkdf2);

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
         const conn: PoolConnection | undefined = await connection();
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
         const conn: PoolConnection | undefined = await connection();
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

      async saveComment({ ...props }: ISaveCommentProps) {
         const conn: PoolConnection | undefined = await connection();
         const sanitize_writer: string = sanitize(props.user);
         const sanitize_pwd: string = sanitize(props.pwd);
         const _cyrpto: { salt: string, _pwd: string } = await cryptoPwd(sanitize_pwd);
         if (conn !== undefined)
            try {
               const query = `INSERT INTO \`${props.postId.replace(/-/g, "_")}\` (bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?)`;
               const dep = [props.group, 0, 0, props.value, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
               await conn.execute(query, dep);
               conn.release();
               if (process.env.NODE_ENV === "production")
                  sendMsg(props.contentName, sanitize_writer, props.value);
               await contentModel.increaseCmtCount<string, string>(props.topic, props.postId);
               return { state: true };
            } catch (e) {
               conn.release();
               console.error(e);
               return { state: false };
            }
      },

      async saveReply({ ...props }: ISaveReplyProps) {
         const conn: PoolConnection | undefined = await connection();
         const sanitize_writer = sanitize(props.user);
         const sanitize_pwd = sanitize(props.pwd);
         const _cyrpto = await cryptoPwd(sanitize_pwd);
         const cmt_table_name = props.postId.replace(/-/g, "_");
         if (conn !== undefined)
            try {
               const sort_query = `SELECT COALESCE (MIN(SORTS),0) FROM \`${cmt_table_name}\`
                                WHERE BGROUP = ${props.grorp}
                                AND SORTS > ${props.sorts}
                                AND DEPTH <= ${props.depth}
            `;
               const [result]: any = await conn.execute(sort_query);
               conn.release();
               const sort = result[0]["COALESCE (MIN(SORTS),0)"];
               if (sort === 0) {
                  const zeroQuery = `SELECT COALESCE(MAX(SORTS),0) + 1 FROM \`${cmt_table_name}\`
                                  WHERE bgroup = ${props.grorp}
               `;
                  const [result]: any = await conn.execute(zeroQuery);
                  conn.release();
                  const save_sort = result[0]["COALESCE(MAX(SORTS),0) + 1"];//save_sort => 답글에 대한 sort를 구
                  const save_query = `INSERT INTO \`${cmt_table_name}\` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)`;
                  const dep = [props.board, props.grorp, save_sort, props.depth + 1, props.value, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                  await conn.execute(save_query, dep);
                  conn.release();
               } else {
                  const update_query = `UPDATE \`${cmt_table_name}\` SET SORTS=SORTS+1
                                   WHERE bgroup=${props.grorp} AND sorts>=${sort}
               `;
                  await conn.execute(update_query);
                  conn.release();
                  const save_query = `INSERT INTO \`${cmt_table_name}\` (parent,bgroup,sorts,depth,cmt,created,writer,pwd,salt) VALUES (?,?,?,?,?,?,?,?,?)`;
                  const dep = [props.board, props.grorp, sort, props.depth + 1, props.value, makeDate(), sanitize_writer, _cyrpto._pwd, _cyrpto.salt];
                  await conn.execute(save_query, dep);
                  conn.release();
               }
               await contentModel.increaseCmtCount<string, string>(props.topic, props.postId);
               const getCommentData: any = await this.getComment(props.postId);
               return { state: true, data: getCommentData };
            } catch (e) {
               console.error(e);
               return { state: false };
            }
      },


      async deleteComment(data: ICommentDeletDataProps) {
         const conn: PoolConnection | undefined = await connection();
         if (conn !== undefined)
            try {
               const find_query = `SELECT * FROM \`${data.postsId.replace(/-/g, "_")}\` WHERE board = ?`;
               const dep = [data.board];
               const [result]: any = await conn.execute(find_query, dep);
               const state: boolean = await decryptoPwd(result[0], data.pwd, data.user);
               if (state) {
                  const query = `DELETE FROM \`${data.postsId.replace(/-/g, "_")}\` where board = ?`;
                  const promises = data.deleteArr.map(e => promiseArray(conn, query, [e]));
                  await Promise.all(promises);
                  conn.release();
                  await contentModel.decreaseCmtCount<string, string>(data.topic, data.postsId, data.deleteArr.length);
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

      async deleteCmtTable(postid: string) {
         const conn: PoolConnection | undefined = await Adminconnection();
         if (conn !== undefined)
            try {
               const query = `DROP TABLE \`${postid.replace(/-/g, "_")}\``;
               await conn.execute(query);
            } catch (e) {
               console.error(e);
            }
      },

      async login(data: { id: string, pwd: string }) {
         const conn = await Adminconnection();
         if (conn !== undefined)
            try {
               const [result]: any = await conn.execute("select * from user where id=?", [data.id]);
               conn.release();
               if (!result.length) return false;
               else {
                  const key = await pbkdf2Promise(data.pwd, result[0].salt, Number(process.env.CRYPTO_ITER), Number(process.env.CRYPTO_NUM), String(process.env.CRYPTO_ALGO));
                  return result[0].password === key.toString("base64");
               }
            } catch (e) {
               console.error(e);
               conn.release();
            }
      },
   }
;
export default indexModel;
