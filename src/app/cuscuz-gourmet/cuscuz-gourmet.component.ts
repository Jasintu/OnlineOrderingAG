import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuscuz-gourmet',
  templateUrl: './cuscuz-gourmet.component.html',
  styleUrls: ['./cuscuz-gourmet.component.css']
})
export class CuscuzGourmetComponent{
  pegarValor(valor: string) {
    let x:number = 0

    if(x === 0){
      let recheio1:string = valor
      x = 1
      console.log("este é o valor 1", recheio1)
    }else if(x === 1){
      let recheio2:string = valor
      x = 0
      console.log("este é o valor 2", recheio2)
    }
  }
}
