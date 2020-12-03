import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Juguete } from './juguetes-list/juguete';

@Injectable({
  providedIn: 'root'
})

export class JuguetesCartService {
  
  private _carritoLista: Juguete [] = [];
  
  carritoLista: BehaviorSubject<Juguete[]> = new  BehaviorSubject(this._carritoLista);
  
  constructor() { }
   
  aniadirCarrito(juguete: Juguete) {
    let item: any = this._carritoLista.find((v1)=> v1.categoria == juguete.categoria);
    if(!item){
      this._carritoLista.push({ ... juguete});
    }
    else{
      item.suma+=juguete.suma;     
    }
    console.log(this.carritoLista);
    this.carritoLista.next(this._carritoLista);
  }

  
}
