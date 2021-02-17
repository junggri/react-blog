import { Request } from "express";
import multer from "multer";
import * as path from "path";


const _path = path.resolve("../thumbnail");


export const uploadThumbnail = multer({
   storage: multer.diskStorage({
      destination: (req, file, cb) => {
         req.session.img = [];
         cb(null, _path);
      },
      filename(req: Request, file: Express.Multer.File, cb: (error: (Error | null), filename: string) => void) {
         const filename: string = new Date().valueOf() + path.extname(file.originalname);
         if (req.session.img !== null) req.session.img.push(filename);
         cb(null, filename);
      },
   }),
   limits: { fileSize: 20 * 1024 * 1024 },
}).single("data");
