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
exports.fileValidator = void 0;
const multer = require("multer");
class fileValidator {
    uploadImageValidator() {
        // the file size to be 5 mb
        const limits = { fileSize: 5 * 1024 * 1024 };
        // Accepted formats
        const acceptedExtensions = [
            "jpg",
            "JPG",
            "png",
            "PNG",
            "jpeg",
            "JPEG",
            "docx",
            "DOCX",
            "doc",
            "DOC",
            "xls",
            "XLS",
            "xsls",
            "XSLS",
            "pdf",
            "PDF",
            "CSV",
            "csv",
            "SVG",
            "svg",
            "xlsx",
            "XLSX",
        ];
        const storage = multer.memoryStorage();
        // const fileFilter = (req: any, file: any, cb: any) => {
        //   if (file.mimetype.split("/")[0] === "image") {
        //     cb(null, true);
        //   } else {
        //     cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
        //   }
        // };
        const fileFilter = (req, file, cb) => __awaiter(this, void 0, void 0, function* () {
            if (acceptedExtensions.some((ext) => file.originalname.endsWith("." + ext))) {
                return cb(null, true);
            }
            const error = new Error("Invalid Format.Allowed Formats " + acceptedExtensions.join(", "));
            return cb(error);
        });
        const upload = multer({
            storage,
            fileFilter,
            limits,
        });
        return upload;
    }
}
exports.fileValidator = fileValidator;
