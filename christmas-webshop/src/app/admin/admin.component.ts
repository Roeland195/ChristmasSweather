import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../webshop/products/product.model';
import { productService } from '../webshop/products/product.service';
import { AdminService } from './Admin.Service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private AdminService: AdminService, private ProductService: productService) { }

  ngOnInit(): void {
    this.AdminService.onAdmin = true;

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
