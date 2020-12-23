import { Request, Response } from "express";
import model from "../model/admin.model";

interface IAdminController {
   login: (req: Request, res: Response) => void
}

const AdminController: IAdminController = {
   async login(req: Request, res: Response) {
      const a = await model.login(req.body.data);
      console.log(a);
   },
};
export default AdminController;