import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './Components/customer-form/customer-form.component';
import { DisplayCustomerComponent } from './Components/display-customer/display-customer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { DisplayCustByIdComponent } from './Components/display-cust-by-id/display-cust-by-id.component';
import { HomeComponent } from './Components/home/home.component';
import { from } from 'rxjs';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './Components/delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    DisplayCustomerComponent,
    PageNotFoundComponent,
    DisplayCustByIdComponent,
    HomeComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
