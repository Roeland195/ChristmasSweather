import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { themeModel } from 'src/app/webshop/products/theme.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productImage: string = 'https://cdn.pixabay.com/photo/2012/04/02/13/51/cardboard-box-24547_1280.png';
  product: ProductModel = new ProductModel;
  theme: themeModel = new themeModel;
  constructor() { }

  ngOnInit(): void {
  }

  submit(form: NgForm){ 
    this.theme = form.value.theme;
    
    this.product.name = form.value.name;
    this.product.description = form.value.description;
    this.product.image = form.value.image;
    this.product.color = form.value.color;
    this.product.price = form.value.price;
    this.product.sex = form.value.sex;
    this.product.size = form.value.size;
    this.product.theme = this.theme;

    console.log(this.product);
    
  }

}
