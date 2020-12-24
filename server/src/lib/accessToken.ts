import jwt from "jsonwebtoken";


function accessToken() {
   let token = jwt.sign(
      { login: true },
      process.env.JWT_SECRET as string,
      {
         expiresIn: "300m",
         issuer: "localhost",
         subject: "userinfo",
      },
   );
   return token;
}

export default accessToken;