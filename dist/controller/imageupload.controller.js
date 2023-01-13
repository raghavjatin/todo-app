"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadController = void 0;
const s3_1 = require("../services/s3");
class ImageUploadController {
    constructor() {
        this.uploadAttachment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('--req  ---- ', req.file);
            const response = yield this.s3Service.uploadAttachment(req, res);
            res.send(response);
        });
        this.s3Service = new s3_1.services3(); // Create a new instance of PostController
    }
}
exports.ImageUploadController = ImageUploadController;
//   public uploadImage = async (req: Request, res: Response) => {
//     const storage = multer.memoryStorage();
//     const fileFilter = (req: any, file: any, cb: any) => {
//       if (file.mimetype.split("/")[0] === "image") {
//         cb(null, true);
//       } else {
//         cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
//       }
//     };
//     // ["image", "jpeg"]
//     const upload = multer({
//       storage,
//       fileFilter,
//       limits: { fileSize: 1000000000, files: 2 },
//     });
// app.post("/upload", upload.array("file"), async (req, res) => {
//     try {
//       const results = await this.s3Service.uploadAttachment(req.files);
//       console.log(results);
//       return res.json({ status: "success" });
//     } catch (err) {
//       console.log(err);
//     }
//   });
// try {
//   const results = await this.s3Service.uploadAttachment(req.files);
//   console.log(results);
//   return res.json({ status: "success" });
// } catch (err) {
//   console.log(err);
// }
// const posts = await this.photoService.index();
// res.send(posts).json();
