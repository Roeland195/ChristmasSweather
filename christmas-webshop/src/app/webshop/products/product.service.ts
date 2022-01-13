import { Injectable } from '@angular/core';
import {HttpSercive} from "../../http.service";
import {ProductModel} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class productService{
  allProducts: ProductModel[] = [];
  products: ProductModel[] = [];
  size: string[] = [];
  color: string[] = [];


  selectedProduct : ProductModel = new ProductModel;

  constructor(private http: HttpSercive) { }

  getAllProducts(extra: string ,implementation: (data: ProductModel[]) => void) : void{
    this.allProducts = [];
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
    this.allProducts.push(product);
    this.products.push(product);
  }

  setSelectedProduct(product: ProductModel){    
    this.selectedProduct = product;
    console.log("SELECTED PRODUCT: "+this.selectedProduct);
    
  }
}
