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
exports.PhotoService = void 0;
const connection_1 = require("../connection/connection");
const photo_1 = require("../entity/photo");
const user_1 = require("../entity/user");
class PhotoService {
    constructor() {
        // fetch all photo details
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const photoRepository = connection_1.AppDataSource.getRepository(photo_1.Photo);
            const users = yield photoRepository.find();
            return users;
        });
        // fetch photo details by user id
        this.userPhotos = (user_id) => __awaiter(this, void 0, void 0, function* () {
            console.log("user id many  ", user_id);
            const photoRepository = connection_1.AppDataSource.getRepository(photo_1.Photo);
            const photoDetails = yield photoRepository
                .createQueryBuilder()
                .where({ user: user_id })
                .getMany();
            console.log("photoDetails many  ", photoDetails);
            return photoDetails;
        });
        // create new photo detail
        this.create = (photo, user_id) => __awaiter(this, void 0, void 0, function* () {
            const userRepository = connection_1.AppDataSource.getRepository(user_1.User);
            const photoRepository = connection_1.AppDataSource.getRepository(photo_1.Photo);
            const user = yield userRepository.findOne(user_id);
            console.log("request find user  ", user);
            // eslint-disable-next-line no-self-assign
            photo.url = photo.url;
            photo.user = user;
            const newUser = yield photoRepository.save(photo);
            return newUser;
        });
    }
}
exports.PhotoService = PhotoService;
