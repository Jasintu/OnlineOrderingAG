import { Component } from '@angular/core';

@Component({
  selector: 'app-card-pizza-salgada',
  templateUrl: './card-pizza-salgada.component.html',
  styleUrls: ['./card-pizza-salgada.component.css']
})
export class CardPizzaSalgadaComponent {
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

//------------------------------------------------- 

minhaCorPix:string = 'white'
minhaCorCartao:string = 'white'
minhaCorDinheiro:string = 'white'
  
  opcaoPix(){
    this.minhaCorPix = 'rgb(43, 42, 42)'
    this.minhaCorCartao= 'white'
    this.minhaCorDinheiro = 'white'
  }
  opcaoCartao(){
    this.minhaCorCartao= 'rgb(43, 42, 42)'
    this.minhaCorPix= 'white'
    this.minhaCorDinheiro = 'white'
  }
  opcaoDinheiro(){
    this.minhaCorDinheiro = 'rgb(43, 42, 42)'
    this.minhaCorPix= 'white'
    this.minhaCorCartao= 'white'
  }

//------------------------------------------------- 

  nomePizza!:string
  quantidadePizza!:number
  precoPizza!:number

  handleReceberInfoPizza(pizza: { nome: string, quantidade: number, preco: number }){
    this.nomePizza = pizza.nome
    this.quantidadePizza = pizza.quantidade
    this.precoPizza = pizza.preco
  }

}
