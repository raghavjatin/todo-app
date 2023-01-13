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
exports.ProductController = void 0;
const product_service_1 = require("../services/product.service");
class ProductController {
    constructor() {
        this.findAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productService.findProduct();
            res.send(products).json();
        });
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const product = req["body"];
            const newProduct = yield this.productService.createProduct(product);
            res.send(newProduct);
        });
        this.findProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("req paramn", req.params);
            const products = yield this.productService.findProductById(req.params.id);
            res.send(products);
        });
        this.updateProductDetails = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const product = req["body"];
            const product_id = req["params"]["id"];
            const updateProduct = yield this.productService.updateProduct(product, Number(product_id));
            res.send(updateProduct);
        });
        this.deleteProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req["params"]["id"];
            const result = yield this.productService.deleteProduct(Number(id));
            res.send(result);
        });
        this.productService = new product_service_1.ProductService();
    }
}
exports.ProductController = ProductController;
