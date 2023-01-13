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
exports.UserService = void 0;
const connection_1 = require("../connection/connection");
const user_1 = require("../entity/user");
class UserService {
    constructor() {
        // fetch all users
        this.findUsers = () => __awaiter(this, void 0, void 0, function* () {
            const userRepository = connection_1.AppDataSource.getRepository(user_1.User);
            const users = yield userRepository.find();
            return users;
        });
        // create new user
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const userRepository = connection_1.AppDataSource.getRepository(user_1.User);
            const newUser = yield userRepository.save(user);
            return newUser;
        });
    }
}
exports.UserService = UserService;
