import { ProductModel } from "src/app/webshop/products/product.model";

export class OrderModel{
    id: string;
    user_id: string;
    totalAmount: number;
    total_price: number;
    status: string;
    orderItems: ProductModel[];

  
    constructor() {
      this.id = '';
      this.status = '';
      this.totalAmount = 0;
      this.total_price = 0;
      this.user_id = '';
      this.orderItems = [];
    }
  }
  