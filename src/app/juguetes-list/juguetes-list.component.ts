import { Component, OnInit } from '@angular/core';
import { JugueteriaDataService } from '../jugueteria-data.service';
import { JuguetesCartService } from '../juguetes-cart.service';
import { Juguete } from './juguete';

@Component({
  selector: 'app-juguetes-list',
  templateUrl: './juguetes-list.component.html',
  styleUrls: ['./juguetes-list.component.scss']
})
export class JuguetesListComponent implements OnInit {

  juguetes: Juguete[] =[
    {
    "categoria": "Juego de mesa",        
    "edad": +12,
    "envio": "Todo el pais",
    "precio": 400,
    "stock": 50,
    "oferta": true,
    "imagen": "assets/JuegoMesa.jpg",
    "suma": 0,
  },
  {
    "categoria": "Aire libre - mascara",        
    "edad": +2,
    "envio": "Todo el pais",
    "precio": 200,
    "stock": 30,
    "oferta": true,
    "imagen": "assets/máscara.jpg",
    "suma": 0,
  },
  {
    "categoria": "Bebés",        
    "edad": +0,
    "envio": "Todo el pais",
    "precio": 2000,
    "stock": 15,
    "oferta": false,
    "imagen": "assets/gimnasio.jpg",
    "suma": 0,
  },
  {
    "categoria": "Interactivos - robot",        
    "edad": +6,
    "envio": "Todo el pais",
    "precio": 12000,
    "stock": 0,
    "oferta": false,
    "imagen": "assets/robot.jpg",
    "suma": 0,
  }
]; 
  
  constructor(
    private carrito: JuguetesCartService,  
    private jugueteriaDataService: JugueteriaDataService){

    }


  ngOnInit(): void {
  }
  
  
  aniadirCarrito(juguete: Juguete): void{
    this.carrito.aniadirCarrito(juguete)
    juguete.stock -= juguete.suma;
    juguete.suma = 0;
  }
  limiteProd(m: string){
    alert(m);
  }
}

