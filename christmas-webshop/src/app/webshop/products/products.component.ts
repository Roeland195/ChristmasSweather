import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { productService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  size : string[]= [];
  sizeExist = false;

  constructor(private ProductService: productService) { }

  ngOnInit(): void {
    this.ProductService.getAllProducts('',(data: ProductModel[])=>{
      this.fillProductArray(data);
      this.products = this.ProductService.products;
      this.ProductService.productsListChanged.subscribe(value =>{
        this.products = this.ProductService.products;
      });
    });
  }

  private fillProductArray(data: ProductModel[]) : void {
    data.forEach((product)=>{
      this.ProductService.pushProduct(product);
      this.ProductService.color.push(product.color);
      this.size.push(product.size);
    });

    this.size.forEach((string)=>{
      this.ProductService.size.forEach((size)=>{
        if(string.toUpperCase() === size.toUpperCase()){
          this.sizeExist = true;
        }
      });
      if(!this.sizeExist){
        this.ProductService.size.push(string.toUpperCase());
      }
      this.sizeExist = false;
    })
  }

  ngOnDestroy(): void {
    this.ProductService.setCookies();
  }
}
