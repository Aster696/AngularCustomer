import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/model/Customers';
import { CustomersService } from 'src/services/customers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer = new Customers();
  id: any;

  constructor(
              private customerService: CustomersService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ConfirmAlert('Comfirm', 'Do you want to delete the record', 'warning');

    // const response = this.ConfirmAlert('Comfirm', 'Do you want to delete the record', 'warning');
    // if (response){
    //     this.deleteCutomer(this.id);
    //     // alert('record deleted successfully');
    //     // this.SweetAlert('Deleted', 'Customer data deleted success fully', 'success', 5000);
    //     this.router.navigate(['/display-cust']);
    // }else{
    //     this.router.navigate(['/display-cust']);
    // }
  }

  deleteCutomer(custId: number): void{
    this.customerService
    .deleteCustomer(custId)
    .subscribe(
      data =>
      {
        // alert('record deleted successfully'),
        // this.router.navigate(['/display-cust']);
      },
      error => console.log(error)
    );
  }

  SweetAlert(ti: string, tex: string, typ: any, time: number): any{
    this.deleteCutomer(this.id);
    Swal.fire({
      title: ti,
      text: tex,
      icon: typ,
      timerProgressBar: true,
      timer: time,
    });
    this.router.navigate(['/display-cust']);
  }

  ConfirmAlert(ti: string, tex: string, typ: any): any{
    Swal.fire({
      title: ti,
      text: tex,
      icon: typ,
      showConfirmButton: true,
      showCancelButton: true,
      timerProgressBar: true,
      position: 'center',
      toast: true
    }).then((result => {
                          if (result.isConfirmed){
                            this.SweetAlert('Deleted',
                                            'Customer data deleted success fully',
                                            'success',
                                            5000);
                          }else{
                            this.router.navigate(['/display-cust']);
                          }
                        }
            ));
  }

}
