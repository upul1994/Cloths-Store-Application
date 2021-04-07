import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService:ProductsService,private activatedRoute:ActivatedRoute) { }

  categoryList:any
  id:any

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(result=>{
      this.id=result.get('id');

      this.productService.getCategoryToHome().subscribe(result=>{
        this.categoryList=result;
      })
    })




    this.productService.searchProductByCategory(this.id).subscribe(result=>{
    })
  }

}
