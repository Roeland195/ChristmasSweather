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
  imageproducts: ProductModel[] = [];

  constructor(private ProductService: productService) {
  }

  ngOnInit(): void {
    this.ProductService.getAllProducts('',(data: ProductModel[])=>{
      this.fillProductArray(data);
      this.products = this.ProductService.products;

      for(let i =0; i< 4; i++){
        let random = Math.floor(Math.random() * this.products.length);
        this.imageproducts.push(this.products[random]);
      }
    });
  }

  private fillProductArray(data: ProductModel[]) : void {
    data.forEach((product)=>{
      this.ProductService.pushProduct(product);
    });
  }
}
