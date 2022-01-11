import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WebshopComponent } from './webshop/webshop.component';
import { ProductsComponent } from './webshop/products/products.component';
import { ShoplistComponent } from './webshop/shoplist/shoplist.component';
import { ProductComponent } from './webshop/products/product/product.component';
import { HomeComponent } from './webshop/home/home.component';
import { SearchbarComponent } from './webshop/products/searchbar/searchbar.component';
import { ProductwheelComponent } from './webshop/products/productwheel/productwheel.component';
import { ImagewheelComponent } from './webshop/products/imagewheel/imagewheel.component';
import {productService} from "./webshop/products/product.service";
import {FormsModule} from "@angular/forms";
import { IconsComponent } from './icons/icons.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AdminService } from './admin/Admin.Service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebshopComponent,
    ProductsComponent,
    ShoplistComponent,
    ProductComponent,
    HomeComponent,
    SearchbarComponent,
    ProductwheelComponent,
    ImagewheelComponent,
    IconsComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    OverviewComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [productService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
