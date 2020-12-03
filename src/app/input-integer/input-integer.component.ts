import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Juguete } from '../juguetes-list/juguete';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

 constructor() { }

  
  @Input()
  suma: number = 0;

  @Input()
  max: number = 0;

  @Output()
  sumaChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  limiteProd: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnInit(): void {
  }
  upSuma(): void{
    if(this.suma < this.max){
    this.suma++;
    this.sumaChange.emit(this.suma );
    }else
    this.limiteProd.emit("superó el maximo del producto");
  }
  downSuma(): void{
    if(this.suma > 0 )
    this.suma--;
    this.sumaChange.emit(this.suma);
  }
 
}
