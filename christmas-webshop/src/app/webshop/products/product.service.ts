import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import {HttpSercive} from "../../http.service";
import {ProductModel} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class productService{
  productsListChanged: Subject<boolean> = new Subject<boolean>();

  cookieProductShoppingCart: ProductModel[] =[];
  cookieProductWishList: ProductModel[] =[];

  allProducts: ProductModel[] = [];
  products: ProductModel[] = [];
  size: string[] = [];
  color: string[] = [];


  selectedProduct : ProductModel = new ProductModel;

  constructor(private http: HttpSercive, private cookieService: CookieService) { }

  getAllProducts(extra: string ,implementation: (data: ProductModel[]) => void) : void{
    this.allProducts = [];
    this.products = [];
    this.productsListChanged.next(false);
    this.http.get<ProductModel[]>("/Product", implementation);
  }

  addToShoppingCart() : void{
    console.log("HERE");
    
    this.http.post("/Wishlist", this.cookieProductShoppingCart, (data) =>{
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

  setCookies(){
    this.cookieService.set('christmasSweather-product-shoppingcart', JSON.stringify(this.cookieProductShoppingCart));
    this.cookieService.set('christmasSweather-product-like', JSON.stringify(this.cookieProductWishList));  
  }

  getCookies(){
    this.cookieProductShoppingCart = JSON.parse(this.cookieService.get('christmasSweather-product-shoppingcart'));
    this.cookieProductWishList = JSON.parse(this.cookieService.get('christmasSweather-product-like'));
  }
}
