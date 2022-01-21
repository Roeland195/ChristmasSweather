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

  constructor(private ProductService: productService) { }

  ngOnInit(): void {
      this.products = this.ProductService.products;
  }

  ngOnDestroy(): void {
    this.ProductService.setCookies();
  }
}
