import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './webshop/home/home.component';
import { ProductComponent } from './webshop/products/product/product.component';
import { ProductsComponent } from './webshop/products/products.component';
import { ShoplistComponent } from './webshop/shoplist/shoplist.component';

export const routes: Routes = [
  {path: '',redirectTo:'/christmasSweather', pathMatch: 'full'},
  {path: 'christmasSweather', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:name', component: ProductComponent},
  {path: 'shoplist', component: ShoplistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
