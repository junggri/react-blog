import express from "express";

const router = express.Router();

router.get("/csrf", (req, res) => {
   res.json(req.csrfToken());
});

router.post("/check/csrf", (req, res) => {
   res.status(200).json({state: true});
});

export default router;
