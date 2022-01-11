import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { productService } from '../product.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  filterSearch: string[] =[];
  checkbox: string[]=[];
  size: string[] =[];

  theme: string = '';
  sex: string[]=[];
  avalable = false;

  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.size = this.productService.size;
  }

  submit(form: NgForm){
    this.productService.products = [];
    this.filterSearch = [];
    this.theme = form.value.thema;
    this.filterSearch.push(form.value.price);
    this.filterSearch.push(form.value.avalable);
    for(let i = 0; i < this.checkbox.length; i++){
      this.filterSearch.push(this.checkbox[i]);
    }

    this.setFilterdProducts();
  }

  setFilterdProducts(){
    this.productService.allProducts.forEach(function (value){

    });
  }

  sizeChecker(event: any){
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

  sexChecker(event: any){
  }

  clearFilter(){
    this.filterSearch = [];
    this.productService.products = this.productService.allProducts;
  }
}
