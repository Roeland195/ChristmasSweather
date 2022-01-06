import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product.model';
import { productService } from '../product.service';

@Component({
  selector: 'app-productwheel',
  templateUrl: './productwheel.component.html',
  styleUrls: ['./productwheel.component.scss']
})
export class ProductwheelComponent implements OnInit {
  @Input() product: ProductModel | any;
  

  constructor(private router: Router, private productService: productService) { }

  ngOnInit(): void {
  }

  onSingleProduct(){
    console.log("HERE IS ON SINGLE PRODUCT");
    
    console.log("PRODUCT: " +this.product);
    
    this.productService.setSelectedProduct(this.product);
    this.router.navigate(['/product', this.product.id]);
  }

}
