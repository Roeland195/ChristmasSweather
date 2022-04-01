import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IconsComponent } from './icons/icons.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AdminService } from './admin/Admin.Service';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingCartItemComponent } from './webshop/shoplist/shopping-cart-item/shopping-cart-item.component';
import { FavoriteItemComponent } from './webshop/likedlist/favorite-item/favorite-item.component';
import { LikedlistComponent } from './webshop/likedlist/likedlist.component';
import { LoadingComponent } from './webshop/home/loading/loading.component';
import { OrderOverViewComponent } from './admin/order-over-view/order-over-view.component';
import { OrderComponent } from './admin/order/order.component';
import { OrderProductComponent } from './admin/order/order-product/order-product.component';
import { HttpClientModule } from '@angular/common/http';
import { Http_Intercepter } from './Http_intercepter';
import { JwtInterceptor } from './JwtInterceptor';
import { PopupComponent } from './popup/OrderPopup/popup.component';

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
    EditProductComponent,
    ShoppingCartItemComponent,
    FavoriteItemComponent,
    LikedlistComponent,
    LoadingComponent,
    OrderOverViewComponent,
    OrderComponent,
    OrderProductComponent,
    PopupComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [productService, AdminService, CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: Http_Intercepter, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
