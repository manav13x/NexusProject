import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:7777/customers";
  }

  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers:headers});
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  searchCustomers(field: string, value: string): Observable<Customer[]> {
    return this.http.get(this.getSearchUrl(field,value)).pipe(
      map(data => data.json())
    );
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post(this.baseUrl, JSON.stringify(customer), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put(this.baseUrl, JSON.stringify(customer), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }
}
