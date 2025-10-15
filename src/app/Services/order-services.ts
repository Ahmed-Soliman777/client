import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderInterface } from '../interfaces/order-interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrderServices {
  constructor(public http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      token: token || '',
    });
  }
  addOrder(order: OrderInterface) {
    return this.http.post(`${environment.api_base_url}/order`, order, {
      headers: this.getHeaders(),
    });
  }
  getOrders() {
    return this.http.get<OrderInterface[]>(`${environment.api_base_url}/order`, {
      headers: this.getHeaders(),
    });
  }
}
