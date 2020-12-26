import { Request, Response } from "express";
import model from "../model/admin.model";
import accessToken from "../lib/accessToken";
import verifyToken from "../lib/verifyToken";

// import phoneCertification from "../lib/phoneCertification";

interface IAdminController {
   login: (req: Request, res: Response) => void
   setToken: (req: Request, res: Response) => void
   checkJWTToken: (req: Request, res: Response) => void
}

const AdminController: IAdminController = {
   async login(req: Request, res: Response) {
      const result = await model.login(req.body.data);
      // let certification_number = phoneCertification();
      res.status(200).json({ state: result, number: 1 });
   },

   async setToken(req, res) {
      let token = accessToken();
      res.cookie("jwt", token, { httpOnly: true, path: "/" });
      res.status(200).json({ state: true });
   },

   async checkJWTToken(req: Request, res: Response) {
      const jwttoken = req.cookies.jwt;
      const decoded = await verifyToken(jwttoken);
      decoded
         ? res.status(200).json({ decoded: decoded })
         : res.status(200).json({ decoded: null });
   },


};
export default AdminController;