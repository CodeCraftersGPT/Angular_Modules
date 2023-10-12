import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor() { }
  // define product array with 5 products and contain name price and image
  products = [{name: 'product1', price: 100, image: 'assets/images/product1.jpg'}, {name: 'product2', price: 200, image: 'assets/images/product2.jpg'}, {name: 'product3', price: 300, image: 'assets/images/product3.jpg'}, {name: 'product4', price: 400, image: 'assets/images/product4.jpg'}, {name: 'product5', price: 500, image: 'assets/images/product5.jpg'}]; 

}
