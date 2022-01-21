import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from "../products/product.model";
import {productService} from "../products/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  imageproducts: ProductModel[] = [];

  constructor(private ProductService: productService) {
  }

  ngOnInit(): void {
    this.products = this.ProductService.products;
    this.imageproducts = this.ProductService.imageproducts;
  }

  ngOnDestroy(): void {
    this.ProductService.setCookies();
  }
}
