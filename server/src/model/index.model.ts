import connection from "../lib/index.connection";

const indexModel = {
  getContents: async () => {
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
};

export default indexModel;
