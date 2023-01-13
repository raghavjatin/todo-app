import express from "express";
import { ProductController } from "../controller/product.controller";

class Product {
  public router: express.Router = express.Router();
  public productController: ProductController;

  constructor() {
    this.productController = new ProductController();

    this.assign();
  }

  private assign() {
    this.router.get("/", this.productController.findAllProducts);
    this.router.post("/", this.productController.createProduct);
    this.router.get("/:id", this.productController.findProductById);
    this.router.put("/:id", this.productController.updateProductDetails);
    this.router.delete("/:id", this.productController.deleteProductById);
  }
}

export default new Product().router;
