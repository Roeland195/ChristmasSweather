import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { productService } from '../product.service';

@Component({
  selector: 'app-productwheel',
  templateUrl: './productwheel.component.html',
  styleUrls: ['./productwheel.component.scss']
})
export class ProductwheelComponent implements OnInit {
  @Input() product: ProductModel | any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
