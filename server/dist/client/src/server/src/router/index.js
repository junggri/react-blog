"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_controller_1 = __importDefault(require("../controller/index.controller"));
var router = express_1.default.Router();
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
router.get("/csrf", index_controller_1.default.getCsrf);
router.get("/item/:postid/comment", index_controller_1.default.getCommnet);
router.get("/google/count", index_controller_1.default.getGaCount);
router.post("/comment", index_controller_1.default.saveComment);
router.post("/reply", index_controller_1.default.saveReply);
router.post("/comment/items", index_controller_1.default.deleteComment);
exports.default = router;
//# sourceMappingURL=index.js.map