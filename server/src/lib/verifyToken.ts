import jwt from "jsonwebtoken";

async function verify(jwttoken: string) {
   try {
      const decoded = jwt.verify(jwttoken, process.env.JWT_SECRET as string);
      return decoded;
   } catch (e) {
      console.error(e);
   }
}

export default verify;