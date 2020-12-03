import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuguetesListComponent } from './juguetes-list/juguetes-list.component';
import { CarritoCartComponent } from './carrito-cart/carrito-cart.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { JuguetesAboutComponent } from './juguetes-about/juguetes-about.component';
import { JugueteriaToysComponent } from './jugueteria-toys/jugueteria-toys.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    JuguetesListComponent,
    CarritoCartComponent,
    JuguetesAboutComponent,
    JugueteriaToysComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
