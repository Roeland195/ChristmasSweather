import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { productService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private ProductService: productService) { }

  ngOnInit(): void {
    this.ProductService.getAllProducts('',(data: ProductModel[])=>{
      this.fillProductArray(data);
      this.products = this.ProductService.products;
    });
  }

  private fillProductArray(data: ProductModel[]) : void {
    data.forEach((product)=>{
      this.ProductService.pushProduct(product);
      this.ProductService.color.push(product.color);
      this.ProductService.size.push(product.size);
    });
  }
}
