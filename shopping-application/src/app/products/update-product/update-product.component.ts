import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute,private productService:ProductsService) { }

  msg=false;
  productId:any;
  viewProductList:any

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.productId =data.get('id')
    })

    this.productService.viewProduct(this.productId).subscribe(result=>{
      this.viewProductList=result;

    })
  }

  updateProductToNew(){
      this.productService.updateProduct(this.productId,this.viewProductList).subscribe(result=>{
        this.msg =true;
      })
    }

}
