import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Users/about-us/about-us.component';
import { CartComponent } from './Users/cart/cart.component';
import { ContactUsComponent } from './Users/contact-us/contact-us.component';
import { HomeComponent } from './Users/home/home.component';
import { LoginComponent } from './Users/login/login.component';
import { LogoutComponent } from './Users/logout/logout.component';
import { ProductsComponent } from './Users/products/products.component';
import { RegisterComponent } from './Users/register/register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"aboutUs",component:AboutUsComponent},
  {path:"register",component:RegisterComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"login",component:LoginComponent},
  {path:"cart",component:CartComponent},
  {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
