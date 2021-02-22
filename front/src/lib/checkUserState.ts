import jwt from "jsonwebtoken";

export default function checkJwtToken(token: string | null) {
   if (token !== null) {
      try {
         const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET as string);
         return decoded;
      } catch (e) {
         localStorage.removeItem("_jt");
      }
   }
}