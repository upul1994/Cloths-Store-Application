import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";



@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute,private productService:ProductsService) { }

  productId:any;
  viewProductList: any;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.productId =data.get('id')

    })

    this.productService.viewProduct(this.productId).subscribe(result=>{
      this.viewProductList=result;


    })


  }

  delete(){
    this.productService.deleteProduct(this.productId).subscribe(result=>{
      console.log("product deleted successful")
    })
  }

}
