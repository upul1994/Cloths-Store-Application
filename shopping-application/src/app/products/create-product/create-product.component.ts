import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  msg =false;

  ngOnInit(): void {
  }

  addNewProduct(productAddForm: NgForm){

    const productData ={
      productName:productAddForm.value.productName,
      categoryId:productAddForm.value.categoryId,
      description:productAddForm.value.description,
      rating:productAddForm.value.rating,
      productColor:productAddForm.value.productColor,
      isAvailable:productAddForm.value.isAvailable,
      price:productAddForm.value.productPrice,
      reviews:productAddForm.value.reviews,
      productImg:productAddForm.value.productImg


    }

    this.productService.createProduct(productData).subscribe(result=>{
      this.msg=true;
    })


  }

  processFile(imageInput: any){

  }

}
