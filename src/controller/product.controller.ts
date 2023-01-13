import { Response, Request } from "express";
import { Product } from "../entity/product.model";
import { ProductService } from "../services/product.service";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public findAllProducts = async (req: Request, res: Response) => {
    const products = await this.productService.findProduct();
    res.send(products).json();
  };

  public createProduct = async (req: Request, res: Response) => {
    const product = req["body"] as Product;

    const newProduct = await this.productService.createProduct(product);
    res.send(newProduct);
  };

  public findProductById = async (req: Request, res: Response) => {
    console.log("req paramn", req.params);
    const products = await this.productService.findProductById(req.params.id);
    res.send(products);
  };

  public updateProductDetails = async (req: Request, res: Response) => {
    const product = req["body"] as Product;
    const product_id = req["params"]["id"];

    const updateProduct = await this.productService.updateProduct(product, Number(product_id));
    res.send(updateProduct);
  };

  public deleteProductById = async (req: Request, res: Response) => {
    const id = req["params"]["id"];
    const result = await this.productService.deleteProduct(Number(id));
    res.send(result);
  };
}
