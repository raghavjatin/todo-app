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
exports.services3 = void 0;
const aws_sdk_1 = require("aws-sdk");
const uuid_1 = require("uuid");
class services3 {
    // uploadImage(files : any){
    uploadAttachment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const s3 = new aws_sdk_1.S3();
            const params = req.files.map((file) => {
                return {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: `uploads/${(0, uuid_1.v4)()}-${file.originalname}`,
                    Body: file.buffer,
                };
            });
            return yield Promise.all(params.map((param) => s3.upload(param).promise()));
        });
    }
}
exports.services3 = services3;
