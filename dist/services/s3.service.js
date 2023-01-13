"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Serviceww = void 0;
// const AWS = require('aws-sdk');
const AWS = __importStar(require("aws-sdk"));
const fs = __importStar(require("fs"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)();
const AWSCredentials = {
    accessKey: process.env.AWS_ACCESS_KEY,
    secret: process.env.AWS_SECRET_KEY,
    bucketName: process.env.AWS_BUCKET_NAME,
};
const s3 = new AWS.S3({
    accessKeyId: AWSCredentials.accessKey,
    secretAccessKey: AWSCredentials.secret,
});
class S3Serviceww {
    constructor() {
        this.uploadFile = () => __awaiter(this, void 0, void 0, function* () {
            const jsonPath = path_1.default.join(__dirname, '..', 'assets', 'pwb-erd.png');
            const fileContent = yield fs.promises.readFile(jsonPath);
            // Setting up S3 upload parameters
            const params = {
                "Bucket": "sgjatin-bucket",
                "Key": 'AKIA5OG5J7DELWIJI67F',
                "ContentType": "application/xml",
                "Body": fileContent
            };
            // Uploading files to the bucket
            const data2 = yield s3.upload(params).promise();
            console.log(`File uploaded successfully. ${data2.Location}`);
            return true;
        });
        this.uploadFile();
    }
}
exports.S3Serviceww = S3Serviceww;
