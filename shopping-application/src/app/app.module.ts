import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrdersModule} from "./orders/orders.module";
import {SiteFrameworkModule} from "./site-framework/site-framework.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule,
    FormsModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
