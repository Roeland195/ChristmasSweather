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

  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.productService.getCookies();
    this.shoppingCartProducts = this.productService.cookieProductShoppingCart;
  }

  ngOnDestroy(): void {
    this.productService.setCookies();

    this.productService.addToShoppingCart();
  }
}