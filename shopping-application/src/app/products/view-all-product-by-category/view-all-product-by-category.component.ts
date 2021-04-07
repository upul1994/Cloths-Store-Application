import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ProductsService} from "../products.service";

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute,private productService:ProductsService) { }

  paramId:any
  productList :any


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.paramId =param.get('id')

    })

   this.productService.searchProductByCategory(this.paramId).subscribe(result=>{
     this.productList=result;
   })
  }

}
