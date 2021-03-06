import { Request, Response } from "express";
import model from "../model/admin.model";
import accessToken from "../lib/accessToken";
import phoneCertification from "../lib/phoneCertification";

interface IAdminController {
   login: (req: Request, res: Response) => void
   setToken: (req: Request, res: Response) => void
}

const AdminController: IAdminController = {
   async login(req: Request, res: Response) {
      const result = await model.login(req.body.data);
      let certification_num: number;
      process.env.NODE_ENV === "development"
         ? certification_num = 1
         : certification_num = phoneCertification();

      result
         ? res.status(200).json({ state: result, number: certification_num })
         : res.status(401).json({ state: true });
   },

   async setToken(req, res) {
      let token = accessToken();
      res.status(200).json({ token: token });
   },


};
export default AdminController;