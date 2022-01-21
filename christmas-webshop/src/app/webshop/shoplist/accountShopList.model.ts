import { ProductModel } from "../products/product.model";

export class AccountShoplist{
    products: ProductModel[];
    userId: string;
  
    constructor() {
      this.products = [];
      this.userId ="";
    }
  }
  