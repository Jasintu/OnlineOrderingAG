import { Component, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-card-pizza-salgada',
  templateUrl: './card-pizza-salgada.component.html',
  styleUrls: ['./card-pizza-salgada.component.css'],
})
export class CardPizzaSalgadaComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {

  }

  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

//------------------------------------------------- 
  animationState = 'visible';

  removerItem(index: any) {
    this.pedido.splice(index, 1)
    this.total.splice(index, 1)
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

  pedido:any = []

  total: number[] = []

  calcularSoma(): number {
    return this.total.reduce((acc, num) => acc + num, 0)
  }

//------------------------------------------------- 

  handleReceberInfoPizza(pizza: { nome: string, quantidade: number, preco: number }){
    this.pedido.push(pizza)
    this.total.push(pizza.preco)
  }
  
  handleReceberInfoBatataFrita(batataFrita: { nome: string, quantidade: number, preco: number }){
    this.pedido.push(batataFrita)
    this.total.push(batataFrita.preco)
  }

}
