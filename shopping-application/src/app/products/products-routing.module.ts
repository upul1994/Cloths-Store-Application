import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateProductComponent} from "./create-product/create-product.component";
import {ViewProductComponent} from "./view-product/view-product.component";
import {ViewAllProductsComponent} from "./view-all-products/view-all-products.component";
import {ViewAllProductByCategoryComponent} from "./view-all-product-by-category/view-all-product-by-category.component";
import {ViewAllProductsByDateComponent} from "./view-all-products-by-date/view-all-products-by-date.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent},
  {path:'create-product',component:CreateProductComponent},
  {path :'category/:id',component:ViewAllProductByCategoryComponent},
  {path :'search-date',component:ViewAllProductsByDateComponent},
  {path:'view-product/:id',component:ViewProductComponent},
  {path :'update-product/:id',component:UpdateProductComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
