import { Component, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-card-pizza-salgada',
  templateUrl: './card-pizza-salgada.component.html',
  styleUrls: ['./card-pizza-salgada.component.css'],
})
export class CardPizzaSalgadaComponent {

  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

//------------------------------------------------- 

  removerItem(index: any, item:any) {
    this.total = this.total - item.preco
    this.pedidos.splice(index, 1)
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
  pedidos: { nome: string, quantidade: number, preco: number }[] = []
  total:number = 0 
//------------------------------------------------- 

  adicionarPedidoRepetido(pedido: { nome: string, quantidade: number, preco: number }){
    const indiceExistente = this.pedidos.findIndex(objeto => objeto.nome === pedido.nome)
    if (indiceExistente === -1) {
      this.pedidos.push({ ...pedido })
      this.total = this.total + pedido.preco
    } else {
      this.pedidos[indiceExistente].preco += pedido.preco
      this.pedidos[indiceExistente].quantidade += pedido.quantidade
      this.total = this.total + pedido.preco
    }
  }
  
  handleReceberInfoPizza(pizza: { nome: string, quantidade: number, preco: number }) {
    this.adicionarPedidoRepetido(pizza)
  }
  
  handleReceberInfoBatataFrita(batataFrita: { nome: string, quantidade: number, preco: number }){
    this.adicionarPedidoRepetido(batataFrita)
  }

}
