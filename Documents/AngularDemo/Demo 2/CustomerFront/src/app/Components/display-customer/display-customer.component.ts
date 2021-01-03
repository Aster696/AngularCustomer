import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/model/Customers';
import { CustomersService } from 'src/services/customers.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  customers: Customers[];
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService
    .displayCustomer()
    .subscribe(
              data =>
              {
                this.customers = data;
                console.log(data);
              },
                error => console.log(error)
              );
  }

}
