import jwt from "jsonwebtoken";

export default function checkJwtToken(token: string | null) {
   if (token !== null) {
      const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET as string);
      return decoded;
   }
}