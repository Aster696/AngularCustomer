import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './Components/customer-form/customer-form.component';
import { DeleteCustomerComponent } from './Components/delete-customer/delete-customer.component';
import { DisplayCustByIdComponent } from './Components/display-cust-by-id/display-cust-by-id.component';
import { DisplayCustomerComponent } from './Components/display-customer/display-customer.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'display-cust', component: DisplayCustomerComponent},
  {path: 'display-cust-by-id/:id', component: DisplayCustByIdComponent},
  {path: 'add-cust', component: CustomerFormComponent},
  {path: 'edit-cust/:id', component: UpdateCustomerComponent},
  {path: 'delete-cust/:id', component: DeleteCustomerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
