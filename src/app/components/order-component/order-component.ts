import { Component, OnInit } from '@angular/core';
import { OrderInterface } from '../../interfaces/order-interface';
import { OrderServices } from './../../Services/order-services';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-order-component',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './order-component.html',
  styleUrl: './order-component.css',
})
export class OrderComponent implements OnInit {
  orders: OrderInterface[] = [];
  constructor(private orderService: OrderServices) {}
  ngOnInit(): void {
    this.orderService.getOrders().subscribe((result) => {
      this.orders = result;
    });
  }
}
