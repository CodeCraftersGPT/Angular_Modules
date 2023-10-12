import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor() { }
  // define product array with 5 products and contain name price and image
  // update array with the status field with random 1 and 0 as properties
  products = [{name: 'product1', price: 100, image: 'assets/images/product1.jpg',status:1}, {name: 'product2', price: 200, image: 'assets/images/product2.jpg',status:1}, {name: 'product3', price: 300, image: 'assets/images/product3.jpg',status:0}, {name: 'product4', price: 400, image: 'assets/images/product4.jpg',status:0}, {name: 'product5', price: 500, image: 'assets/images/product5.jpg',status:1}]; 

}
