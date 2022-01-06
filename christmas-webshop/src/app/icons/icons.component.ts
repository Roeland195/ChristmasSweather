import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../webshop/products/product.model';
import { productService } from '../webshop/products/product.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() product: ProductModel = new ProductModel;

  constructor(private productService: productService) { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(){    
    this.productService.addToShoppingCart(this.product);
  }

}
