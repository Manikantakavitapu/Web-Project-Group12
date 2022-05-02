import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { OrderComponent } from './order/order.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    AuthenticationComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    PetDetailsComponent,
    OrderComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
