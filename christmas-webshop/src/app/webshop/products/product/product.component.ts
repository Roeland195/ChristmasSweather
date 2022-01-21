import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product.model';
import { productService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductModel = new ProductModel;
  products: ProductModel[] = [];

  constructor(private productService: productService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.productService.selectedProduct.name);
    this.products = this.productService.products;
    
    if(this.productService.selectedProduct.name === ''){
      this.router.navigate(['/products']);
    }
    this.product = this.productService.selectedProduct;
  }

}
