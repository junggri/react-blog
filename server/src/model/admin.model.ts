import crypto from "crypto";

const adminModel = {
   login(data: { id: string, pwd: string }) {

      crypto.randomBytes(64, (err, buf) => {
         const salt = buf.toString("base64");
         crypto.pbkdf2(data.pwd, salt, 100385, 64, "sha512", (err, key) => {
            console.log(key.toString("base64"));
         });
      });
   },
};

export default adminModel;