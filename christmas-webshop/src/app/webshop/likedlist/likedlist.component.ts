import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductModel } from '../products/product.model';
import { productService } from '../products/product.service';

@Component({
  selector: 'app-likedlist',
  templateUrl: './likedlist.component.html',
  styleUrls: ['./likedlist.component.scss']
})
export class LikedlistComponent implements OnInit, OnDestroy {
  LikedProducts : ProductModel[] = [];

  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.productService.getCookies();
    this.LikedProducts = this.productService.cookieProductWishList;
  }

  ngOnDestroy(): void {
    this.productService.setCookies();
  }
}