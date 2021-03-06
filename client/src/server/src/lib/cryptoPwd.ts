import crypto from "crypto";
import util from "util";
import * as dotenv from "dotenv";
import { ICommnet } from "../../../modules/Comment/cmtInterface";

dotenv.config();

const promiseSalt = util.promisify(crypto.randomBytes);
const promise = util.promisify(crypto.pbkdf2);

export async function cryptoPwd(pwd: string) {
   const buf = await promiseSalt(Number(process.env.REACT_APP_CRYPTO_NUM));
   const salt = buf.toString("base64");
   const key = await promise(pwd, salt, Number(process.env.REACT_APP_CRYPTO_ITER), Number(process.env.REACT_APP_CRYPTO_NUM), String(process.env.REACT_APP_CRYPTO_ALGO));
   const _pwd = key.toString("base64");


   // let _key = await promise(pwd, salt, Number(process.env.REACT_APP_CRYPTO_ITER), Number(process.env.REACT_APP_CRYPTO_NUM), String(process.env.REACT_APP_CRYPTO_ALGO));
   // console.log(_pwd === _key.toString("base64"));
   return { salt, _pwd };
}

export async function decryptoPwd(data: ICommnet, pwd: string, writer: string) {
   if (data.writer === writer) {
      const key = await promise(pwd, data.salt, Number(process.env.REACT_APP_CRYPTO_ITER), Number(process.env.REACT_APP_CRYPTO_NUM), String(process.env.REACT_APP_CRYPTO_ALGO));
      return data.pwd === key.toString("base64");
   } else {
      return false;
   }
}