import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-compartilhamento',
  templateUrl: './pedidos-compartilhamento.component.html',
  styleUrls: ['./pedidos-compartilhamento.component.css']
})
export class PedidosCompartilhamentoComponent implements OnInit{
  @Input()
  oi!:Array <number>;
   ngOnInit(): void {
      console.log(this.oi)
   }
}
