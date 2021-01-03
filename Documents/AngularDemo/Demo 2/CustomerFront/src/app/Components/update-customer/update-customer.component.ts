import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'process';
import { error } from 'protractor';
import { timer } from 'rxjs';
import { Customers } from 'src/model/Customers';
import { CustomersService } from 'src/services/customers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer = new Customers();
  custId: any;

  constructor(
              private customerService: CustomersService,
              private route: ActivatedRoute,
              private router: Router
              )
              { }

  ngOnInit(): void {
    this.custId = this.route.snapshot.paramMap.get('id');
    this.getCustomerById(this.custId);
  }

  getCustomerById(custId: number): void{
    this.customerService
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

  updateCustomer(): void{
    this.customerService
    .updateCustomer(this.customer)
    .subscribe(
      data =>
      {
        // alert('Customer data updated');
        this.SweetAlert();
        this.router.navigate(['/display-cust']);
      }, error => console.log(error)
    );
  }

  SweetAlert(): any{
    Swal.fire({
      title: 'Updated',
      text: 'customer data updated successfully',
      icon: 'success',
      timer: 5000,
    });
  }

}
