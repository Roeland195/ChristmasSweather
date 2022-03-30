import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { authenticationService } from 'src/app/authentication/authentication.service';
import {HttpSercive} from "../../http.service";
import { AccountShoplist } from '../shoplist/accountShopList.model';
import {ProductModel} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class productService{
  productsListChanged: Subject<boolean> = new Subject<boolean>();
  shoplistAccount: AccountShoplist = new AccountShoplist;


  cookieProductShoppingCart: ProductModel[] =[];
  cookieProductWishList: ProductModel[] =[];

  allProducts: ProductModel[] = [];
  imageproducts: ProductModel[] = [];
  products: ProductModel[] = [];
  size: string[] = [];
  color: string[] = [];


  selectedProduct : ProductModel = new ProductModel;

  constructor(private http: HttpSercive, private cookieService: CookieService, private auth:authenticationService) { }

  getAllProducts(extra: string ,implementation: (data: ProductModel[]) => void, onFailure: () =>void) : void{
    this.allProducts = [];
    this.products = [];
    this.productsListChanged.next(false);
    let map = new Map<string, string>();
    this.http.get<ProductModel[]>("/Product",map ,implementation, onFailure);
  }

  addToShoppingCart( onFailure: () => void) : void{
    console.log("HERE");
    this.shoplistAccount.products = this.cookieProductShoppingCart;
    this.shoplistAccount.userId = this.auth.userEmail;
    console.log(this.shoplistAccount);
    

    this.http.post("/Wishlist", this.shoplistAccount, (data) =>{
      console.log("DATA: "+data);
    }, onFailure);
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
    localStorage.setItem('shoppingcart', JSON.stringify(this.cookieProductShoppingCart));
    localStorage.setItem('wishlist', JSON.stringify(this.cookieProductWishList));
  }

  getCookies(){
    this.cookieProductShoppingCart = JSON.parse(localStorage.getItem('shoppingcart') ||'{}');
    this.cookieProductWishList = JSON.parse(localStorage.getItem('wishlist') || '{}');
  }
}
