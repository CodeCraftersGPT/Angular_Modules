import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products = [{name: 'product1', price: 100, image: 'assets/images/product1.jpg'}, {name: 'product2', price: 200, image: 'assets/images/product2.jpg'}, {name: 'product3', price: 300, image: 'assets/images/product3.jpg'}, {name: 'product4', price: 400, image: 'assets/images/product4.jpg'}, {name: 'product5', price: 500, image: 'assets/images/product5.jpg'}]; 
  product:any;
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap?.subscribe(params => {
      let productName = params.get('name');
      this.product = this.products.find((product:any) => product.name == productName);
     
    });
  }

  


}
