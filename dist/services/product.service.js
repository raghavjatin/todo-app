"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const typedi_1 = require("typedi");
const connection_1 = require("../connection/connection");
const product_model_1 = require("../entity/product.model");
let ProductService = class ProductService {
    constructor() {
        // fetch all product details
        this.findProduct = () => __awaiter(this, void 0, void 0, function* () {
            const productRepository = connection_1.AppDataSource.getRepository(product_model_1.Product);
            const products = yield productRepository.find();
            return products;
        });
        // fetch product details by product id
        this.findProductById = (product_id) => __awaiter(this, void 0, void 0, function* () {
            console.log("product_id ", product_id);
            const productRepository = connection_1.AppDataSource.getRepository(product_model_1.Product);
            const productDetails = yield productRepository
                .createQueryBuilder()
                .where({ id: product_id })
                .getOne();
            return productDetails;
        });
        // create new product
        this.createProduct = (product) => __awaiter(this, void 0, void 0, function* () {
            const productRepository = connection_1.AppDataSource.getRepository(product_model_1.Product);
            const newProduct = yield productRepository.save(product);
            return newProduct;
        });
        // update product
        this.updateProduct = (product, product_id) => __awaiter(this, void 0, void 0, function* () {
            const productRepository = connection_1.AppDataSource.getRepository(product_model_1.Product);
            const productDetails = yield productRepository
                .createQueryBuilder()
                .where({ id: product_id })
                .getOne();
            return productRepository.save(Object.assign(Object.assign({}, productDetails), product));
        });
        // delete product by id
        this.deleteProduct = (id) => __awaiter(this, void 0, void 0, function* () {
            const productRepository = connection_1.AppDataSource.getRepository(product_model_1.Product);
            const deletedProduct = yield productRepository
                .createQueryBuilder()
                .delete()
                .from(product_model_1.Product)
                .where("id = :id", { id: id })
                .execute();
            return deletedProduct;
        });
    }
};
ProductService = __decorate([
    (0, typedi_1.Service)()
], ProductService);
exports.ProductService = ProductService;
