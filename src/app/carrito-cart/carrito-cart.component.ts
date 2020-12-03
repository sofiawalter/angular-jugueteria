import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JuguetesCartService } from '../juguetes-cart.service';
import { Juguete } from '../juguetes-list/juguete';

@Component({
  selector: 'app-carrito-cart',
  templateUrl: './carrito-cart.component.html',
  styleUrls: ['./carrito-cart.component.scss']
})
export class CarritoCartComponent implements OnInit {

  carritoLista$: Observable<Juguete[]>;

  constructor(private carrito: JuguetesCartService) { 
    this.carritoLista$=carrito.carritoLista.asObservable();
  }

  ngOnInit(): void {
  }

}
