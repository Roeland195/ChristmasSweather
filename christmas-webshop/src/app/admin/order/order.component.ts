import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { AdminService } from '../Admin.Service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  private productSub!: Subscription;

  constructor(private AdminService: AdminService) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.AdminService.OnOrder.next(true);
    }, 0);
    this.productSub = this.AdminService.orderProduct.subscribe(data =>{
      this.products = data;
    });
  }
  ngOnDestroy(): void {
    this.AdminService.OnOrder.next(false);
    this.productSub.unsubscribe();
  }

}
