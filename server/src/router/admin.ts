import express from "express";
import AdminController from "../controller/admin.controller";

const router = express.Router();

router.post("/login", AdminController.login);

export default router;
