import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './webshop/products/product/product.component';
import { ProductsComponent } from './webshop/products/products.component';
import { ShoplistComponent } from './webshop/shoplist/shoplist.component';
import { WebshopComponent } from './webshop/webshop.component';

export const routes: Routes = [
  {path: '',redirectTo:'/christmasSweather', pathMatch: 'full'},
  {path: 'christmasSweather', component: WebshopComponent,
    children: [
      {path: 'products', component: ProductsComponent,
        children:[
          {path: 'product', component: ProductComponent},
        ]},
      {path: 'shoplist', component: ShoplistComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
