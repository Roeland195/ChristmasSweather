import { Injectable } from '@angular/core';
import { HttpSercive } from '../http.service';
import { ProductModel } from '../webshop/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService{
  private products: ProductModel[] =[];
  onAdmin = false;

  constructor(private http: HttpSercive) { 
    
  }

  addAdmin(product: ProductModel, implementation : (data : ProductModel[]) => void){
    product.avalable = true;
    this.products.push(product);

    console.log(this.products);
    
    this.http.post<ProductModel[]>('/Product', this.products, implementation);
  }


}
