import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { themeModel } from 'src/app/webshop/products/theme.model';
import { AdminService } from '../Admin.Service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productImage: string = 'https://cdn.pixabay.com/photo/2012/04/02/13/51/cardboard-box-24547_1280.png';
  product: ProductModel = new ProductModel;
  theme: themeModel = new themeModel;

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
    let themas = new FormArray([]);


    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'imagePath': new FormControl(ProductImagePath, Validators.required),
      'price': new FormControl(productPrice, Validators.required),
      'color': new FormControl(productColor, Validators.required),
      'sex': new FormControl(productSex, Validators.required),
      'size': new FormControl(productSize, Validators.required),
      'themas': themas
    });
  }

  onSubmit(){
    this.adminService.addAdmin(this.productForm.value,() =>{});
  }

  onAddThema(){
    (<FormArray>this.productForm.get('themas')).push(
      new FormGroup({
        'thema': new FormControl(null, Validators.required),
      })
    );
   }

   onDeleteIngredient(index: number){
     (<FormArray>this.productForm.get('themas')).removeAt(index);
   }

   get controls() { // a getter!
    return (<FormArray>this.productForm.get('themas')).controls;
  }

}
