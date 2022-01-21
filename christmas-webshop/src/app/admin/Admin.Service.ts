import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { HttpSercive } from '../http.service';
import { ProductModel } from '../webshop/products/product.model';
import { OrderModel } from './order-over-view/Order.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService{
  products: ProductModel[] =[];
  orderProduct: Subject<ProductModel[]> = new Subject<ProductModel[]>();
  onAdmin = false;
  OnOrder: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpSercive) { 
  }

  updateProduct(product:ProductModel, implementation : (data : ProductModel[]) => void, onFailure: () => void){
    this.http.put<ProductModel[]>('/Product', [product, product], implementation, onFailure);
  }

  deleteProduct(product:ProductModel, implementation :(data : ProductModel[]) =>void, onFailure: () => void){
    this.http.delete<ProductModel[]>('/Product', [product, product], implementation, onFailure);
  }

  getOrders(implementation: (data: OrderModel[]) => void, onFailure: () =>void) : void{
    let map = new Map<string, string>();
    this.http.get<OrderModel[]>("/Orders", map ,implementation, onFailure);
  }

  getProductsWithOrder(id: string, implementation: (data: ProductModel[]) => void, onFailure: () => void){
    this.http.getProductsWithOrder<ProductModel[]>("/Orders/products", id, implementation, onFailure);
  }

  addProduct(product: ProductModel, implementation : (data : ProductModel[]) => void, onFailure: () => void){
    product.avalable = true;
    this.products.push(product);

    console.log(this.products);
    
    this.http.post<ProductModel[]>('/Product', [product, product], implementation, onFailure);
  }


}
