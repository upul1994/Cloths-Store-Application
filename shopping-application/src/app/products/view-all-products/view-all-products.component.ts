import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  productList:any

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(result=>{
      this.productList=result;
    })
  }

}
