import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { AdminService } from '../Admin.Service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productImage: string = 'https://cdn.pixabay.com/photo/2012/04/02/13/51/cardboard-box-24547_1280.png';
  product: ProductModel = new ProductModel;

  productForm!: FormGroup;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    let productName = '';
    let productDescription ='';
    let ProductImagePath = '';
    let productPrice = 0;
    let productColor = '';
    let productSex = '';
    let productSize = '';


    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'imagePath': new FormControl(ProductImagePath, Validators.required),
      'price': new FormControl(productPrice, Validators.required),
      'color': new FormControl(productColor, Validators.required),
      'sex': new FormControl(productSex, Validators.required),
      'size': new FormControl(productSize, Validators.required),
    });
  }

  onSubmit(){
    this.adminService.addProduct(this.productForm.value,() =>{});
  }

}
