import { Component } from '@angular/core';

@Component({
  selector: 'app-card-pizza',
  templateUrl: './card-pizza.component.html',
  styleUrls: ['./card-pizza.component.css']
})
export class CardPizzaComponent {
  pizzasComputadas:Array <string> = [

  ]
  quantidadeMargherita:number = 1
  quantidadeDoisQueijos:number = 1
  quantidadeMussache:number = 1
  //margherita
  pegarInfoPizza(NomePedido: string, Quantidade:number, custo:number){
    console.log(NomePedido, Quantidade, custo)
  }
  adicionarMargherita(){
    this.quantidadeMargherita = ++this.quantidadeMargherita
  }
  removerMargherita(){
    this.quantidadeMargherita = --this.quantidadeMargherita
    if(this.quantidadeMargherita == 0){
      this.quantidadeMargherita = 1
    }
  }
  /************************/
  //Dois Queijos
  adicionarDoisQueijos(){
    this.quantidadeDoisQueijos = ++this.quantidadeDoisQueijos
  }
  removerDoisQueijos(){
    this.quantidadeDoisQueijos = --this.quantidadeDoisQueijos
    if(this.quantidadeDoisQueijos == 0){
      this.quantidadeDoisQueijos = 1
    }
  }
  /************************/
  //Mussache
  adicionarMussache(){
    this.quantidadeMussache = ++this.quantidadeMussache
  }
  removerMussache(){
    this.quantidadeMussache = --this.quantidadeMussache
    if(this.quantidadeMussache == 0){
      this.quantidadeMussache = 1
    }
  }
  /************************/
}
