import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";
import {Category} from "../site-framework/sidebar/category";
import {HomeCategory} from "../home/home-category";
import {Contact} from "../contact/contact";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient :HttpClient) { }

  createProduct(createBody:object):Observable<Product>{
    return this.httpClient.post<Product>('http://localhost:3000/products',createBody);
  }

  viewProduct(id:number):Observable<Product>{
    return this.httpClient.get<Product>('http://localhost:3000/products/'+id);
  }

  updateProduct(id:number,updateBody:object):Observable<Product>{
    return this.httpClient.put<Product>('http://localhost:3000/products/'+id,updateBody);
  }


  deleteProduct(id:number):Observable<Product>{
    return this.httpClient.delete<Product>('http://localhost:3000/products/'+id);
  }

  searchProductByCategory(id:number):Observable<Product>{
    return this.httpClient.get<Product>('http://localhost:3000/products?categoryId='+id);
  }

  searchProductByDate(dateParam:any):Observable<Product>{
    return this.httpClient.get<Product>('http://localhost:3000/products/date='+dateParam);
  }

  getCategories():Observable<Category>{
    return this.httpClient.get<Category>('http://localhost:3000/categories');
  }

  getAllProducts():Observable<Product>{
   return  this.httpClient.get<Product>('http://localhost:3000/products')
  }

  getCategoryToHome():Observable<HomeCategory>{
   return  this.httpClient.get<HomeCategory>('http://localhost:3000/categories-home')
  }

  createContact(contactBody:any):Observable<Contact>{
   return  this.httpClient.post<Contact>("http://localhost:3000/contacts",contactBody);
  }


}
