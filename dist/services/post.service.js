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
exports.PostService = void 0;
const connection_1 = require("../connection/connection");
const post_entity_1 = require("../entity/post.entity");
class PostService {
    constructor() {
        this.findPost = () => __awaiter(this, void 0, void 0, function* () {
            const postRepository = connection_1.AppDataSource.getRepository(post_entity_1.PostEntity);
            const posts = yield postRepository.find();
            return posts;
        });
        this.create = (post) => __awaiter(this, void 0, void 0, function* () {
            const postRepository = connection_1.AppDataSource.getRepository(post_entity_1.PostEntity);
            const newPost = yield postRepository.save(post);
            return newPost;
        });
        this.update = (post, id) => __awaiter(this, void 0, void 0, function* () {
            const postRepository = connection_1.AppDataSource.getRepository(post_entity_1.PostEntity);
            const updatedPost = yield postRepository.update(id, post);
            return updatedPost;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const postRepository = connection_1.AppDataSource.getRepository(post_entity_1.PostEntity);
            const deletedPost = yield postRepository.delete(id);
            return deletedPost;
        });
    }
}
exports.PostService = PostService;
