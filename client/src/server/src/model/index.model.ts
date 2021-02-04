import connection from "../config/comment.connection";
import { v4 as uuidv4 } from "uuid";

const indexModel = {
   async getComment() {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const query = "SELECT * FROM board order by bgroup asc, sorts asc";
            const [result] = await conn.execute(query);
            conn.release();
            return { state: true, data: result };
         } catch (e) {
            console.error(e);
            conn.release();
            return { state: false };
         }
   },

   async saveComment(cmt: string, grp: number) {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const uid = uuidv4();
            const query = `INSERT INTO BOARD (bgroup,sorts,depth,cmt) VALUES (?,?,?,?)`;
            const dep = [grp, 0, 0, cmt];
            await conn.execute(query, dep);
            conn.release();
            return { state: true };
         } catch (e) {
            conn.release();
            console.error(e);
            return { state: false };
         }
   },

   async saveReply(reply: string, bn: number, grp: number, sorts: number, depth: number) {
      console.log(bn);
      const conn = await connection();
      if (conn !== undefined)
         try {
            console.log("sorts", sorts, "depth", depth);
            const sort_query = `SELECT COALESCE (MIN(SORTS),0) FROM BOARD
                                WHERE BGROUP=${grp}
                                AND SORTS>${sorts}
                                AND DEPTH <= ${depth}
                                `;
            const [result]: any = await conn.execute(sort_query);
            conn.release();
            const sort = result[0]["COALESCE (MIN(SORTS),0)"];//sort => 0이면 첫 댓글 아니먄 대댓글 즉 글의 대한 소트이다
            if (sort === 0) {
               const zeroQuery = `SELECT COALESCE(MAX(SORTS),0) + 1 FROM BOARD
                                  WHERE BGROUP=${grp}
                                  `;
               const [result]: any = await conn.execute(zeroQuery);
               conn.release();
               const save_sort = result[0]["COALESCE(MAX(SORTS),0) + 1"];//save_sort => 답글에 대한 sort를 구
               const save_query = `INSERT INTO BOARD (parent,bgroup,sorts,depth,cmt) VALUES (?,?,?,?,?)`;
               const dep = [bn, grp, save_sort, depth + 1, reply];
               await conn.execute(save_query, dep);
               conn.release();
            } else {
               const update_query = `UPDATE BOARD SET SORTS=SORTS+1
                                     WHERE BGROUP=${grp} AND SORTS >= ${sort}
                                    `;
               await conn.execute(update_query);
               conn.release();
               const save_query = `INSERT INTO BOARD (parent,bgroup,sorts,depth,cmt) VALUES (?,?,?,?,?)`;
               const dep = [bn, grp, sort, depth + 1, reply];
               await conn.execute(save_query, dep);
               conn.release();
            }
            return { state: true };
         } catch (e) {
            console.error(e);
            return { state: false };
         }
   },
};

export default indexModel;
