import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpformComponent } from './empform/empform.component';
// import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
