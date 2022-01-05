import { Component, OnInit } from '@angular/core';
import { ProductModel } from "../products/product.model";
import {productService} from "../products/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private ProductService: productService) {
  }

  ngOnInit(): void {
    this.ProductService.getAllProducts((data: ProductModel[])=>{
      this.fillProductArray(data);
      this.products = this.ProductService.products;
    });
  }

  private fillProductArray(data: ProductModel[]) : void {
    data.forEach((product)=>{
      this.ProductService.pushProduct(product);
    });
  }
}
