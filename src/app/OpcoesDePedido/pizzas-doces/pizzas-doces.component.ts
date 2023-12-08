import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pizzas-doces',
  templateUrl: './pizzas-doces.component.html',
  styleUrls: ['./pizzas-doces.component.css']
})
export class PizzasDocesComponent {
  @Output() enviarInfos = new EventEmitter<any>()
  quantidadeBanana:number = 1 

  pegarInfoPizzaDoce(nomePedido: string, quantidade:number, preco:number){
    let precoFinalBatata:number = quantidade * preco
    this.enviarInfos.emit({nome: nomePedido, quantidade: quantidade, preco: precoFinalBatata})
  }

// pizza banana

  adicionarBanana(){
    this.quantidadeBanana = ++this.quantidadeBanana
  }

  removerBanana(){
    this.quantidadeBanana  = --this.quantidadeBanana 
    if(this.quantidadeBanana == 0){
      this.quantidadeBanana  = 1
    }
  }

}
