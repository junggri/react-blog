import connection from "../config/commnet.connection";

const indexModel = {
   async saveComment(cmt: string) {
      const conn = await connection();
      try {
         const query_1 = `INSERT INTO BOARD VALUES ()`;
      } catch (e) {

      }
   },
};

export default indexModel;
