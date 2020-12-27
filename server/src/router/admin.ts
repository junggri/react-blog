import express from "express";
import AdminController from "../controller/admin.controller";

const router = express.Router();

router.post("/login", AdminController.login);

router.post("/token", AdminController.setToken);

router.get("/token/csrf", AdminController.checkJWTToken);


export default router;
