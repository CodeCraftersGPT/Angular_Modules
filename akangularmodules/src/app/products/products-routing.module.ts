import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    { path: 'products/:name', component: ProductDetailComponent },
     { path: '', component: ProductListComponent, pathMatch: 'prefix'},
    { path: 'products', component: ProductListComponent }
  
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
