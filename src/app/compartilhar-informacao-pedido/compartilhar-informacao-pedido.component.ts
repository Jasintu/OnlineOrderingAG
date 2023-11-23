import { Injectable, Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, AfterViewInit, AfterViewChecked, NgZone, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-compartilhar-informacao-pedido',
  templateUrl: './compartilhar-informacao-pedido.component.html',
  styleUrls: ['./compartilhar-informacao-pedido.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CompartilharInformacaoPedidoComponent implements OnChanges {
  @Input() ReceberPizzaSalgadaNome!:string
  @Input() ReceberPizzaSalgadaQuantidade!:number
  @Input() ReceberPizzaSalgadaPreco!: number
  leftPercentage: number = 30
  valorFinal: number[] = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ReceberPizzaSalgadaPreco'] && changes['ReceberPizzaSalgadaPreco'].currentValue !== undefined && changes['ReceberPizzaSalgadaPreco'].currentValue !== null) {
      this.valorFinal.push(this.ReceberPizzaSalgadaPreco)
      console.log('oi', this.valorFinal)
    }
  }

  //********************************************************//

  minhaCorPix:string = 'white'
  minhaCorCartao:string = 'white'
  minhaCorDinheiro:string = 'white'

  opcaoPix(){
    this.valorFinal = this.valorFinal
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

