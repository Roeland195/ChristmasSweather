import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from '../webshop/products/product.model';
import { productService } from '../webshop/products/product.service';
import { AdminService } from './Admin.Service';
import { OrderModel } from './order-over-view/Order.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  orders: OrderModel[] = [];
  onOrders = false;
  productchange!: Subscription;
  productSub!: Subscription;

  constructor(
    private AdminService: AdminService,
    private ProductService: productService) { }

  ngOnInit(): void {
    this.AdminService.onAdmin = true;
    this.AdminService.getOrders((data: OrderModel[])=>{
      this.orders = data;      
    }, () =>{});

    this.productchange = this.ProductService.productchange.subscribe((data)=>{
      console.log('activate change');
      this.products = this.ProductService.products;
      
    })


      this.products = this.ProductService.products;
      this.productSub = this.AdminService.OnOrder.subscribe((data)=>{        
        this.onOrders = data;
      })
  }

  ngOnDestroy(): void {
      this.AdminService.onAdmin = false;
      this.productSub.unsubscribe();
  }
}
