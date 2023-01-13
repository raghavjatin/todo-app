"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controller/post.controller");
class PostRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.postRoute();
    }
    postRoute() {
        this.postController = new post_controller_1.PostController();
        this.router.get("/", this.postController.findPost);
        this.router.post("/", this.postController.create);
        this.router.put("/:id", this.postController.update);
        this.router.delete("/:id", this.postController.delete);
    }
}
exports.default = new PostRoute().router;
