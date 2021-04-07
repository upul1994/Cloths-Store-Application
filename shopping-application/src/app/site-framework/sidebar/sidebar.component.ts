import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../products/products.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private productService :ProductsService) { }

   categoryList:any

  ngOnInit(): void {
    this.productService.getCategories().subscribe(result=>{
      this.categoryList =result;
    })
  }

}
