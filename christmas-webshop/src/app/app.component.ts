import { Component, OnInit } from '@angular/core';
import { ProductModel } from './webshop/products/product.model';
import { productService } from './webshop/products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'christmas-webshop';
  products: ProductModel[] = [];
  size: String[] = [];
  isLoading = false;
  sizeExist = false;

  constructor(private ProductService: productService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    if(this.ProductService.allProducts.length <= 0){
      this.ProductService.getAllProducts('',(data: ProductModel[])=>{
        this.fillProductArray(data);
        this.products = this.ProductService.products;

        for(let i =0; i< 4; i++){
          let random = Math.floor(Math.random() * this.products.length);
          this.ProductService.imageproducts.push(this.products[random]);
        }
        this.isLoading = false;
      }, () =>{});
    }else{
      this.isLoading = false;
      this.fillProductArray(this.ProductService.allProducts);
      this.products = this.ProductService.products;
    }
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
}
