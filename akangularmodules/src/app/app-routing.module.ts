import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { authGuard } from './shared/shared/auth.guard';
import { LoginComponent } from './core/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',canActivate:[authGuard], component: HomeComponent },
  {path:'login',component:LoginComponent},
  { path: 'products',canActivate:[authGuard], loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),pathMatch:'prefix' },
  { path: 'orders', component:OrderListComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
