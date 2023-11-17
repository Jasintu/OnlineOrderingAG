import { Injectable, Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'app-compartilhar-informacao-pedido',
  templateUrl: './compartilhar-informacao-pedido.component.html',
  styleUrls: ['./compartilhar-informacao-pedido.component.css']
})
export class CompartilharInformacaoPedidoComponent implements OnChanges{
  @Input() ReceberPizzaSalgadaNome!: string;
  @Input() ReceberPizzaSalgadaQuantidade!: number;
  @Input() ReceberPizzaSalgadaPreco!: number;
  valorFinalPedido: number = 0

  PizzaRecebidaNome: string[] = [];
  PizzaRecebidaQuantidade: number[] = [];
  PizzaRecebidaPreco: number[] = [];

  ngOnChanges() {
    this.PizzaRecebidaNome.push(this.ReceberPizzaSalgadaNome);
    this.PizzaRecebidaQuantidade.push(this.ReceberPizzaSalgadaQuantidade);
    this.PizzaRecebidaPreco.unshift(this.ReceberPizzaSalgadaPreco || 0);
    this.PizzaRecebidaNome = this.PizzaRecebidaNome.filter(item => item !== undefined);
    this.PizzaRecebidaQuantidade = this.PizzaRecebidaQuantidade.filter(item => item !== undefined);
    this.PizzaRecebidaPreco = this.PizzaRecebidaPreco.filter(item => item !== undefined);
    this.valorFinalPedido = this.PizzaRecebidaPreco.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    
    console.log('valorFinalPedido:', this.valorFinalPedido);
  }

  //********************************************************//

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
}
function push(arg0: number) {
  throw new Error('Function not implemented.');
}

