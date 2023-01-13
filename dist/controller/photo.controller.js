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
exports.PhotoController = void 0;
const photo_service_1 = require("../services/photo.service"); // import service
class PhotoController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.photoService.index();
            res.send(posts).json();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req["body"];
            const newPost = yield this.photoService.create(post, req.params.user_id);
            res.send(newPost);
        });
        // find user photo by user id
        this.userPhoto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const photos = yield this.photoService.userPhotos(req.params.user_id);
            console.log("response ", photos);
            res.send(photos);
            // res.status(200).json({
            //   status_code: 1,
            //   data: photos,
            // });
        });
        this.photoService = new photo_service_1.PhotoService(); // Create a new instance of PostController
    }
}
exports.PhotoController = PhotoController;
