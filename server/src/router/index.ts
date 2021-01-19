import express from "express";

import indexController from "../controller/index.controller";

const router = express.Router();

router.get("/csrf", indexController.getCsrf);

router.get("/google/count", indexController.getGaCount);

router.post("/check/csrf", (req, res) => {
   res.status(200).json({ state: true });
});


export default router;
