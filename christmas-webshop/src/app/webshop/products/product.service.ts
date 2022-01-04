import { Injectable } from '@angular/core';
import {HttpSercive} from "../../http.service";
import {ProductModel} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class productService{
  constructor(private http: HttpSercive) { }

  getAllProducts(implementation: (data: ProductModel[]) => void) : void{
    let parameters = new Map<string, string>();
    this.http.get<ProductModel[]>("/Product", parameters, implementation);
  }
}
