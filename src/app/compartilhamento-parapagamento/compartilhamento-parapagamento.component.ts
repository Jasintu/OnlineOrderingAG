import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-compartilhamento-parapagamento',
  templateUrl: './compartilhamento-parapagamento.component.html',
  styleUrls: ['./compartilhamento-parapagamento.component.css']
})
export class CompartilhamentoParapagamentoComponent implements OnInit, OnChanges{
  @Input() recebernome!:string

  listanomePedido: any[] = []

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recebernome'].currentValue !== undefined && changes['recebernome'].currentValue !== null) {
      this.listanomePedido.push(this.recebernome)
      console.log(this.listanomePedido)
    }
  }
}

