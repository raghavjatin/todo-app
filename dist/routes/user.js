"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
class UserRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.userRoute();
    }
    userRoute() {
        this.userController = new user_controller_1.UserController();
        this.router.get('/getAll/user', this.userController.findUsers);
        this.router.post('/create/user', this.userController.create);
    }
}
exports.default = new UserRoute().router;
