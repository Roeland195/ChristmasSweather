import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../products/product.model';
import { productService } from '../../products/product.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {
  @Input() product: ProductModel | any;
  inCookie = false;

  constructor(private productService: productService) { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(){
    this.inCookie = false;
    this.productService.cookieProductShoppingCart.forEach((product)=>{
      if(product.id === this.product.id){
        this.inCookie = true;
      }
    });  
    if(!this.inCookie){
      this.productService.cookieProductShoppingCart.push(this.product);
    }

    this.onRemoveFromFavorite();
  }
  
  onRemoveFromFavorite(){
    this.productService.cookieProductWishList.forEach((product, index)=>{
      if(product.id === this.product.id){
        this.productService.cookieProductWishList.splice(index,1);
      }
    });
  }

}
