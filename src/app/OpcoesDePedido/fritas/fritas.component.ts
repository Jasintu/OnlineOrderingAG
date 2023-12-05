import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fritas',
  templateUrl: './fritas.component.html',
  styleUrls: ['./fritas.component.css']
})
export class FritasComponent{

  @Output() enviarInfos = new EventEmitter<any>()
  quantidadeMediaNormal: number = 1
  quantidadeGrandeNormal: number = 1
  quantidadeMediaGourmet: number = 1
  quantidadeGrandeGourmet: number = 1

  pegarInfoFritas(nomePedido: string, quantidade:number, preco:number){
    let precoFinalBatata:number = quantidade * preco
    this.enviarInfos.emit({nome: nomePedido, quantidade: quantidade, preco: precoFinalBatata})
  }

  //********** Normal Média
  adicionarMediaNormal(){
    this.quantidadeMediaNormal = ++this.quantidadeMediaNormal
  }
  removerMediaNormal(){
    this.quantidadeMediaNormal = --this.quantidadeMediaNormal
    if(this.quantidadeMediaNormal == 0){
      this.quantidadeMediaNormal = 1
    }
  }
  //************* Normal Grande
  adicionarGrandeNormal(){
    this.quantidadeGrandeNormal = ++this.quantidadeGrandeNormal
  }
  removerGrandeNormal(){
    this.quantidadeGrandeNormal = --this.quantidadeGrandeNormal
    if(this.quantidadeGrandeNormal == 0){
      this.quantidadeGrandeNormal = 1
    }
  }
  //************* Gourmet Média
  adicionarMediaGourmet(){
    this.quantidadeMediaGourmet = ++this.quantidadeMediaGourmet
  }
  removerMediaGourmet(){
    this.quantidadeMediaGourmet = --this.quantidadeMediaGourmet
    if(this.quantidadeMediaGourmet == 0){
      this.quantidadeMediaGourmet = 1
    }
  }
  //************* Gourmet Grande
  adicionarGrandeGourmet(){
    this.quantidadeGrandeGourmet = ++this.quantidadeGrandeGourmet
  }
  removerGrandeGourmet(){
    this.quantidadeGrandeGourmet = --this.quantidadeGrandeGourmet
    if(this.quantidadeGrandeGourmet == 0){
      this.quantidadeGrandeGourmet = 1
    }
  }
}
