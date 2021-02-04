import express from "express";

import indexController from "../controller/index.controller";

const router = express.Router();

router.get("/csrf", indexController.getCsrf);

router.get("/comment/item", indexController.getCommnet);

router.get("/google/count", indexController.getGaCount);

router.post("/comment", indexController.saveComment);

router.post("/reply", indexController.saveReply);

export default router;
