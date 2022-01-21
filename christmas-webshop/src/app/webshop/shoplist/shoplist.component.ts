import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from '../products/product.model';
import { productService } from '../products/product.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent implements OnInit, OnDestroy {
  shoppingCartProducts: ProductModel[] = [];
  TotalAmount: number = 0;
  TotalProducts: number = 0;

  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.productService.getCookies();
    this.shoppingCartProducts = this.productService.cookieProductShoppingCart;
    this.shoppingCartProducts.forEach(product =>{
      this.TotalAmount = this.TotalAmount + product.price;
      this.TotalProducts = this.TotalProducts +1;
    })
  }

  orderProducts(){
    this.productService.addToShoppingCart(() =>{
      this.shoppingCartProducts = [];
    });
  }

  ngOnDestroy(): void {
    this.productService.setCookies();
  }
}