import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders = [{product: 'product1', price: 100, quantity: 1, status:3}, {product: 'product2', price: 200, quantity: 2, status:2}, {product: 'product3', price: 300, quantity: 3, status:2}, {product: 'product4', price: 400, quantity: 4, status:2}, {product: 'product5', price: 500, quantity: 5, status:2}];
  constructor() { }
}
