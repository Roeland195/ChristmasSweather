import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../products/product.model';
import { productService } from '../../products/product.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() product: ProductModel | any;

  constructor(private productService: productService) { }

  ngOnInit(): void {
  }

  onRemoveFromShoppingCart(){
    this.productService.cookieProductShoppingCart.forEach((product, index)=>{
      if(product.id === this.product.id){
        this.productService.cookieProductShoppingCart.splice(index,1);
      }
    });
  }

}
