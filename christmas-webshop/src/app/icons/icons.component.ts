import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductModel } from '../webshop/products/product.model';
import { productService } from '../webshop/products/product.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() product: ProductModel = new ProductModel;
  inCookie = false;


  constructor(private productService: productService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(){  
    this.inCookie = false;
    this.productService.cookieProductShoppingCart.forEach((product)=>{
      if(product.id === this.product.id){
        this.inCookie = true;
      }
    });  
    if(!this.inCookie){
      this.productService.cookieProductShoppingCart.push(this.product);
    }
  }

  onlike(){
    this.inCookie = false;
    this.productService.cookieProductShoppingCart.forEach((product)=>{
      if(product.id === this.product.id){
        this.inCookie = true;
      }
    });  
    if(!this.inCookie){
      this.productService.cookieProductWishList.push(this.product);

    }
  }

}
