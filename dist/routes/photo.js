"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const photo_controller_1 = require("../controller/photo.controller");
class PhotoRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.photoController = new photo_controller_1.PhotoController();
        this.photoRoutes();
    }
    photoRoutes() {
        this.router.get("/getAll/user/photos", this.photoController.userPhoto);
        this.router.post("/create/user/photo", this.photoController.create);
    }
}
exports.default = new PhotoRoute().router;
