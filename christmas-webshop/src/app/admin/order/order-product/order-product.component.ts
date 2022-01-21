import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { productService } from 'src/app/webshop/products/product.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss']
})
export class OrderProductComponent implements OnInit {
  @Input() product: ProductModel | any;

  constructor(private router: Router, private productService: productService) { }

  ngOnInit(): void {
  }

  onSingleProduct(){
    this.productService.setSelectedProduct(this.product);
    this.router.navigate(['/product', this.product.id]);
  }

}
