"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const constant_1 = __importDefault(require("../config/constant"));
const product_service_1 = require("../services/product.service");
const response_parser_1 = require("../util/response-parser");
let ProductController = class ProductController {
    constructor(productService, responseParser) {
        this.productService = productService;
        this.responseParser = responseParser;
        this.findAllProducts = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productService.findProduct();
                this.responseParser
                    .setHttpCode(constant_1.default.HTTP_STATUS_OK)
                    .setBody(products)
                    .setMessage("products found successfully!")
                    .send(res);
            }
            catch (err) {
                next(err);
            }
        });
        this.createProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = req["body"];
                const newProduct = yield this.productService.createProduct(product);
                this.responseParser
                    .setHttpCode(constant_1.default.HTTP_STATUS_OK)
                    .setBody(newProduct)
                    .setMessage("product created successfully!")
                    .send(res);
            }
            catch (err) {
                next(err);
            }
        });
        this.findProductById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("req paramn", req.params);
                const products = yield this.productService.findProductById(req.params.id);
                this.responseParser
                    .setHttpCode(constant_1.default.HTTP_STATUS_OK)
                    .setBody(products)
                    .setMessage("product find successfully!")
                    .send(res);
            }
            catch (err) {
                next(err);
            }
        });
        this.updateProductDetails = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = req["body"];
                const product_id = req["params"]["id"];
                const updateProduct = yield this.productService.updateProduct(product, product_id);
                this.responseParser
                    .setHttpCode(constant_1.default.HTTP_STATUS_OK)
                    .setBody(updateProduct)
                    .setMessage("update product successfully!")
                    .send(res);
            }
            catch (err) {
                next(err);
            }
        });
        this.deleteProductById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req["params"]["id"];
                const result = yield this.productService.deleteProduct(Number(id));
                this.responseParser
                    .setHttpCode(constant_1.default.HTTP_STATUS_OK)
                    .setBody(result)
                    .setMessage("product delete successfully!")
                    .send(res);
            }
            catch (err) {
                next(err);
            }
        });
        this.productService = new product_service_1.ProductService();
    }
};
ProductController = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        response_parser_1.ResponseParser])
], ProductController);
exports.default = ProductController;
