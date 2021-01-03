import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/model/Customers';
import { CustomersService } from 'src/services/customers.service';

@Component({
  selector: 'app-display-cust-by-id',
  templateUrl: './display-cust-by-id.component.html',
  styleUrls: ['./display-cust-by-id.component.css']
})
export class DisplayCustByIdComponent implements OnInit {

  customer = new Customers();
  custId: any;
  constructor(private _customerService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.custId = this.route.snapshot.paramMap.get('id');
    this.getCustomerById(this.custId);
  }

  getCustomerById(custId: number): void{
    this._customerService
    .displayCustomerById(custId)
    .subscribe(
                data =>
                {
                  console.log(data);
                  this.customer = data;
                },
                error => console.log(error)
              );
  }

}
