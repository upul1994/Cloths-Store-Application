import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import {FormsModule} from "@angular/forms";
import {SiteFrameworkModule} from "../site-framework/site-framework.module";

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ViewProductComponent,
    ViewAllProductsComponent,
    UpdateProductComponent,
    ViewAllProductsByDateComponent,
    ViewAllProductByCategoryComponent

  ],

    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        SiteFrameworkModule
    ]

})
export class ProductsModule { }
