import { Component, OnInit } from '@angular/core';
import { OrderServices } from '../../Services/order-services';
import { OrderInterface } from '../../interfaces/order-interface';
import { CurrencyPipe } from '@angular/common';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-admin-orders',
  imports: [CurrencyPipe, MatButtonToggleModule],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.css',
})
export class AdminOrders implements OnInit {
  orders: OrderInterface[] = [];
  constructor(private orderService: OrderServices) {}
  ngOnInit() {
    this.orderService.getAllOrders().subscribe((result) => {
      this.orders = result;
    });
  }

  statusChanged(event: MatButtonToggleChange, order: OrderInterface) {
  const newStatus = event.value;
  this.orderService.updateOrder(order._id!, newStatus).subscribe(() => {
    alert(`Order status updated to ${newStatus}`);
  });
}
}
