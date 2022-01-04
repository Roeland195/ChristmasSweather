import { Component,Input, OnInit } from '@angular/core';
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-imagewheel',
  templateUrl: './imagewheel.component.html',
  styleUrls: ['./imagewheel.component.scss']
})
export class ImagewheelComponent implements OnInit {
  @Input() product : ProductModel;

  constructor() {
    this.product = new ProductModel();
  }

  ngOnInit(): void {
  }
}
