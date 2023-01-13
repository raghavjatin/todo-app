"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageupload_controller_1 = require("../controller/imageupload.controller");
const fileValidation_1 = require("../util/fileValidation");
class ImageUpload {
    constructor() {
        this.router = express_1.default.Router();
        this.imageUploadController = new imageupload_controller_1.ImageUploadController();
        this.fileUploadValidator = new fileValidation_1.fileValidator();
        this.uploadImageOnS3();
    }
    uploadImageOnS3() {
        this.router.post("/upload", this.fileUploadValidator.uploadImageValidator().array("file"), this.imageUploadController.uploadAttachment);
    }
}
exports.default = new ImageUpload().router;
