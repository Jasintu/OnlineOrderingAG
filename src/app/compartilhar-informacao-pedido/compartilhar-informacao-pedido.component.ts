import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compartilhar-informacao-pedido',
  templateUrl: './compartilhar-informacao-pedido.component.html',
  styleUrls: ['./compartilhar-informacao-pedido.component.css']
})
export class CompartilharInformacaoPedidoComponent{
  @Input() ReceberPizzaSalgadaNome:string[] = [];


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
  valorFinalPedido: number = 115
}
