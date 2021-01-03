import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Customers } from 'src/model/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  displayCustomer(): Observable<Customers[]>{
    const api_url = 'http://localhost:8080/customer/display-cust';
    return this.http.get<Customers[]>(api_url);
  }

  addCustomer(customer: Customers): Observable<any>{
    const api_url = 'http://localhost:8080/customer/add-cust';
    return this.http.post<any>(api_url, customer);
  }

  updateCustomer(customer: Customers): Observable<any>{
    const api_url = 'http://localhost:8080/customer/update-cust';
    return this.http.put<any>(api_url, customer);
  }

  displayCustomerById(custId: number): Observable<Customers>{
    const api_url = 'http://localhost:8080/customer/display-cust-by-id/' + custId;
    return this.http.get<Customers>(api_url);
  }

  deleteCustomer(custId: number): Observable<Customers>{
    const api_url = 'http://localhost:8080/customer/delete-cust/' + custId;
    return this.http.delete<Customers>(api_url);
  }

}
