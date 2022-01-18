import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { EMPTY, empty, isEmpty } from 'rxjs';
import { ProductModel } from '../product.model';
import { productService } from '../product.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  productHolder: ProductModel[] =[];

  size: string[] =[];

  checkbox: string[]=[];
  sex: string[]=[];

  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.size = this.productService.size;
  }

  submit(form: NgForm){
    console.log(form.value.avalable);
    this.productHolder = [];
    this.productService.products = [];
 
    this.setFilterdProducts();
    this.productService.productsListChanged.next(!this.productService.productsListChanged);
  }

  setFilterdProducts(){
    this.productService.allProducts.forEach((value)=>{
      if(this.checkbox.length > 0 && this.sex.length > 0){
        if(this.checkbox.length > 0){
          this.checkbox.forEach((checkboxValue)=>{
            if(checkboxValue === value.size.toUpperCase()){
              this.productHolder.push(value);
            }
          });
        }
      }else{
        this.productHolder.push(value);
      }
    });

    this.productService.products = this.productHolder;
    console.log(this.productService.products);  
  }

  checkBoxFilter(event: any){
    console.log(event.target.value);
    
    if(event.target.value === 'man' || event.target.value ==='woman'){
      if(event.target.checked){
        this.sex.push(event.target.value);
      }else{
        this.sex.forEach((sex, index)=>{
          if(sex === event.target.value){
            this.sex.splice(index,1);
          }
        });
      } 
  }else{
    if(event.target.checked){
      this.checkbox.push(event.target.value);
    }else{
      this.checkbox.forEach((size, index)=>{
        if(size === event.target.value){
          this.checkbox.splice(index,1);
        }
      });
    } 
  }
  }


  clearFilter(){
    this.productService.products = this.productService.allProducts;
    this.productService.productsListChanged.next(!this.productService.productsListChanged);
  }
}
