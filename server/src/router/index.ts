import express from "express";
import indexController from "../controller/index.controller";


const router = express.Router();


router.get("/csrf", indexController.getCsrf);

router.get("/comments/comment/posts/:postid", indexController.getComment);

router.get("/google/count", indexController.getGaCount);

router.post("/comments", indexController.saveComment);

router.post("/reply", indexController.saveReply);

router.post("/comments/items", indexController.deleteComment);

router.post("/login", indexController.login);

router.post("/token", indexController.setToken);

export default router;
