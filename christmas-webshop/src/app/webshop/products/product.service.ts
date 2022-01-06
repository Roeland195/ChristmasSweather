import { Injectable } from '@angular/core';
import {HttpSercive} from "../../http.service";
import {ProductModel} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class productService{
  products: ProductModel[] = [];
  selectedProduct : ProductModel = new ProductModel;

  constructor(private http: HttpSercive) { }

  getAllProducts(implementation: (data: ProductModel[]) => void) : void{
    this.products = [];
    this.http.get<ProductModel[]>("/Product", implementation);
  }

  addToShoppingCart(product: ProductModel) : void{
    console.log("HERE");
    
    this.http.post("/Wishlist", product, (data) =>{
      console.log("DATA: "+data);
    });
  }

  pushProduct(product: ProductModel){
    this.products.push(product);
  }

  setSelectedProduct(product: ProductModel){    
    this.selectedProduct = product;
    console.log("SELECTED PRODUCT: "+this.selectedProduct);
    
  }
}
