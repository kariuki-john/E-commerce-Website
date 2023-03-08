import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProuctsService } from './service/proucts.service';
import { ProductsComponent } from './Users/products/products.component'; 
import { CustomerComponent } from './Users/customer/customer.component';
import { UsersService } from './service/users.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomerComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    
    
  ],
  providers: [ProuctsService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
