import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { AdminService } from '../Admin.Service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() product: ProductModel | any;

  constructor(private router: Router,private adminService: AdminService) { }
  ngOnInit(): void {
  
  }

  onProductSelected(){
    console.log(this.product.id);
    
    let productId = this.product.id;
    this.router.navigate(['admin',this.product.id,'edit']);
  }

}
