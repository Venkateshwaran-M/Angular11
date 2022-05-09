import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpformComponent } from './empform/empform.component';
// import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ShipingComponent } from './shiping/shiping.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { AfterSubmitComponent } from './after-submit/after-submit.component';

// import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpformComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ShipingComponent,
    CartComponent,
    ProductDetailsComponent,
    LoginFormComponent,
    AfterSubmitComponent,
    // HttpClientModule,
    
  ],
    
  
  imports: [
    BrowserModule,
    AppRoutingModule,
  
 HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShipingComponent },
      {path:'login', component: AfterSubmitComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
