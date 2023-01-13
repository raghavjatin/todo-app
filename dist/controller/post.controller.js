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
exports.PostController = void 0;
const post_service_1 = require("../services/post.service"); // import service
class PostController {
    constructor() {
        this.findPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postService.findPost();
            res.send(posts).json();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req["body"];
            const newPost = yield this.postService.create(post);
            res.send(newPost);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req["body"];
            const id = req["params"]["id"];
            res.send(this.postService.update(post, Number(id)));
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req["params"]["id"];
            res.send(this.postService.delete(Number(id)));
        });
        this.postService = new post_service_1.PostService(); // Create a new instance of PostController
    }
}
exports.PostController = PostController;
