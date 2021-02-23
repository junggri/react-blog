import express from "express";
import indexController from "../controller/index.controller";

const router = express.Router();

// router.post("/test", async (req, res) => {
//    const conn = await connection();
//    if (conn !== undefined) {
//       for (let i = 0; i < req.body.data.length; i++) {
//          const query = `
//          CREATE TABLE \`${req.body.data[i].uid.replace(/-/g, "_")}\`(
//                board int NOT NULL AUTO_INCREMENT PRIMARY KEY,
//                parent int,
//                bgroup int NOT NULL,
//                sorts int NOT NULL,
//                depth int NOT NULL,
//                cmt varchar(2000) NOT NULL,
//                writer varchar(45),
//                pwd varchar(200) NOT NULL,
//                salt varchar(150) NOT NULL
//             )
//          `;
//          await conn.execute(query);
//          conn.release();
//       }
//       // const [result] = await conn.query(`show tables`);
//       // console.log(result);
//    }
// });


router.get("/csrf", indexController.getCsrf);

router.get("/item/:postid/comment", indexController.getCommnet);

router.get("/google/count", indexController.getGaCount);

router.post("/comment", indexController.saveComment);

router.post("/reply", indexController.saveReply);

router.post("/comment/items", indexController.deleteComment);

export default router;
