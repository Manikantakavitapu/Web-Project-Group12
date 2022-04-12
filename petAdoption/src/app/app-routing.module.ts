import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { BuyerComponent } from './buyer/buyer.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [

    {path:'home',component:HomeComponent},
    { path: 'seller', component: SellerComponent },
    { path:'login',component:LoginComponent},
    { path:'signUp',component:SignupComponent},
    {path:'buyer',component:BuyerComponent},
    {path:'pet-detail',component:PetDetailComponent},
    {path:'pet-details',component:PetDetailsComponent},
    {path:'order',component:OrderComponent},
    {path:'',redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
