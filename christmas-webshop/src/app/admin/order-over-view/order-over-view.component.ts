import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { AdminService } from '../Admin.Service';
import { OrderModel } from './Order.model';

@Component({
  selector: 'app-order-over-view',
  templateUrl: './order-over-view.component.html',
  styleUrls: ['./order-over-view.component.scss']
})
export class OrderOverViewComponent implements OnInit {
  @Input() order: OrderModel | any;

  constructor(private router: Router,private adminService: AdminService) { }
  ngOnInit(): void {
  }

  onOrderSelected(){
    console.log(this.order.orderItems);
    this.adminService.orderProduct.next(this.order.orderItems);
  }
}
