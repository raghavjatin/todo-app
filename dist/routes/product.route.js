"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controller/product.controller");
class Product {
    constructor() {
        this.router = express_1.default.Router();
        this.productController = new product_controller_1.ProductController();
        this.assign();
    }
    assign() {
        this.router.get("/", this.productController.findAllProducts);
        this.router.post("/", this.productController.createProduct);
        this.router.get("/:id", this.productController.findProductById);
        this.router.put("/:id", this.productController.updateProductDetails);
        this.router.delete("/:id", this.productController.deleteProductById);
    }
}
exports.default = new Product().router;
