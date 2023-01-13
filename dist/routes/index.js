"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const product_route_1 = __importDefault(require("./product.route"));
class Routes {
    routes(app) {
        // resource and routes mapping comes here
        app.use("/api/product", product_route_1.default);
    }
}
exports.Routes = Routes;
