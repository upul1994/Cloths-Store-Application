import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListOrdersComponent} from "./orders/list-orders/list-orders.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ViewAllProductByCategoryComponent} from "./products/view-all-product-by-category/view-all-product-by-category.component";


const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },


  {path:'',component:HomeComponent},
  {path:'orders',component:ListOrdersComponent},
  {path :'home',component:HomeComponent},
  {path :'about',component:AboutComponent},
  {path :'contact',component:ContactComponent},
  {path:'products/category/:id',component:ViewAllProductByCategoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
