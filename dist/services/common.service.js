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
exports.CommonService = void 0;
const s3_1 = require("./s3");
class CommonService {
    constructor() {
        this.s3Service = new s3_1.services3();
    }
    /**
     * @param  {CustomRequest} req request object
     * @param  {Response} res response
     * @returns Promise<TemporaryAssets>
     */
    uploadTemporaryFiles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const CDN_URL = "test_cdn";
            //upload the files and get the urls
            const s3Data = yield this.s3Service.uploadAttachment(req, res);
            if (!s3Data) {
                console.log("error_while_uploading_to_s3");
            }
            const urls = s3Data && s3Data.length
                ? s3Data.map((file) => {
                    return {
                        fileName: file.key,
                        fileDisplayName: file.originalname,
                        attachmentType: req.attachmentType,
                        fileUrl: CDN_URL + file.key,
                    };
                })
                : [];
            //   save the urls into temporary_assets table
            return urls;
        });
    }
}
exports.CommonService = CommonService;
