import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products/products.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  msg =false;

  ngOnInit(): void {
  }

  addContact(contactform: NgForm){
    const contact ={
      name:contactform.value.name,
      contactNumber:contactform.value.contactNumber,
      email:contactform.value.email,
      message:contactform.value.message

    }

    this.productService.createContact(contact).subscribe(result=>{
      this.msg=true;
    })

  }





}

