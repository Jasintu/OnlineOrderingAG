import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuscuz-gourmet',
  templateUrl: './cuscuz-gourmet.component.html',
  styleUrls: ['./cuscuz-gourmet.component.css']
})
export class CuscuzGourmetComponent{
  x: number = 1;
  pegarValor(valor: string) {
    let recheio1 = ""
    let recheio2 = ""
    if(this.x === 1){
      this.x = 2
      recheio1 = valor
    }else{
      this.x = 1
      recheio2 = valor
    }
  }
}
