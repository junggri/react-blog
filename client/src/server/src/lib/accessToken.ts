import jwt from "jsonwebtoken";
import env from "../../../../server.env.json";

function accessToken() {
   let token = jwt.sign(
      { login: true },
      env.JWT_SECRET as string,
      {
         expiresIn: "300m",
         issuer: "junggri",
         subject: "login",
      },
   );
   return token;
}

export default accessToken;