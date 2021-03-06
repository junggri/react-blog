import connection from "../config/admin.connection";
import crypto from "crypto";
import util from "util";
import env from "../../../../server.env.json";

const pbkdf2Promise = util.promisify(crypto.pbkdf2);

interface IResult {
   id: string,
   password: string
   phone: string
   email: string
   salt: string
}

function cd(state: any) {
   return state;
}

const adminModel = {
   async login(data: { id: string, pwd: string }) {
      const conn = await connection();
      if (conn !== undefined)
         try {
            const [result]: any = await conn.execute("select * from user where id=?", [data.id]);
            conn.release();
            if (!result.length) return false;
            else {
               const key = await pbkdf2Promise(data.pwd, result[0].salt, Number(env.CRYPTO_ITER), Number(env.CRYPTO_NUM), String(env.CRYPTO_ALGO));
               return result[0].password === key.toString("base64");
            }
         } catch (e) {
            console.error(e);
            conn.release();
         }
   },
};

export default adminModel;