import { Component, OnInit } from '@angular/core';
import { ProductModel } from "../products/product.model";
import {productService} from "../products/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Array<{product: ProductModel}>;

  constructor(private http: productService) {
    this.products = new Array<{product: ProductModel}>();

    this.http.getAllProducts((data: ProductModel[])=>{
      this.fillProductArray(data);
      console.log("DATA: "+ data)
    });
  }

  ngOnInit(): void {
  }

  private fillProductArray(data: ProductModel[]) : void {
    data.forEach((product)=>{
      this.products.push({product: product});
    });
  }
}
