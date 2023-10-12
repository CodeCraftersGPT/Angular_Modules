import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [OrderListComponent,OrderDetailComponent],
  imports: [
    CommonModule,
  ]
})
export class OrderModule { }
