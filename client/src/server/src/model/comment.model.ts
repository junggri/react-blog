// import connection from "../config/commnet.connection";
import crypto from "crypto";
import util from "util";


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

const adminModel = {};

export default adminModel;