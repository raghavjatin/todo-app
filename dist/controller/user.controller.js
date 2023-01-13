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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service"); // import service
class UserController {
    constructor() {
        this.findUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.userService.findUsers();
            res.send(posts).json();
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req['body'];
            const newPost = yield this.userService.create(post);
            res.send(newPost);
        });
        this.userService = new user_service_1.UserService(); // Create a new instance of PostController
    }
}
exports.UserController = UserController;
