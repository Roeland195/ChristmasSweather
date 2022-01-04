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
    ImagewheelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
