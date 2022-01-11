import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
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

  {path: 'auth', component: AuthenticationComponent, children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},

  {path: 'admin', component: AdminComponent, children:[
    {path: 'edit', component: EditProductComponent},
    {path: 'new', component: AddProductComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
