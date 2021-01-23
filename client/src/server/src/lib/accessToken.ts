import jwt from "jsonwebtoken";


function accessToken() {
   let token = jwt.sign(
      { login: true },
      process.env.JWT_SECRET as string,
      {
         expiresIn: "300m",
         issuer: "junggri",
         subject: "login",
      },
   );
   return token;
}

export default accessToken;