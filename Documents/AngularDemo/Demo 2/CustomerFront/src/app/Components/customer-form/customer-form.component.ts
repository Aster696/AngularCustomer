import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/model/Customers';
import { CustomersService } from 'src/services/customers.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer = new Customers();
  constructor(private _customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.customer.custName = '';
    this.customer.custEmail = '';
    this.customer.custAddr = '';
    this.customer.password = '';
  }

  addCustomer(): void{
    this._customerService
    .addCustomer(this.customer)
    .subscribe(data =>
                {
                  console.log(data);
                  alert('customer added sucessfully');
                  this.router.navigate(['/display-cust']);
                },
                error => console.log(error)
              );
  }

}
