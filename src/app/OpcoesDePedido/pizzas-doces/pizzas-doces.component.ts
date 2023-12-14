import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pizzas-doces',
  templateUrl: './pizzas-doces.component.html',
  styleUrls: ['./pizzas-doces.component.css']
})
export class PizzasDocesComponent {
  @Output() enviarInfos = new EventEmitter<any>()
  quantidadeBanana:number = 1 
  quantidadeRomeueJulieta:number = 1 
  quantidadeBrigadeiro:number = 1 
  quantidadePrestigio:number = 1 
  quantidadeDoceNinho:number = 1 
  quantidadeFlorestaNegra:number = 1 
  quantidadeKitKat:number = 1 
  quantidadeNutella: number = 1
  quantidadeNinhoNutela: number = 1
  quantidadeSensacao: number = 1
  quantidadeOreo: number = 1
  quantidadeMeM: number = 1

  pegarInfoPizzaDoce(nomePedido: string, quantidade:number, preco:number){
    let precoFinalBatata:number = quantidade * preco
    this.enviarInfos.emit({nome: nomePedido, quantidade: quantidade, preco: precoFinalBatata})
  }

// pizza banana

  adicionarBanana(){
    this.quantidadeBanana = ++this.quantidadeBanana
  }

  removerBanana(){
    this.quantidadeBanana  = --this.quantidadeBanana 
    if(this.quantidadeBanana == 0){
      this.quantidadeBanana  = 1
    }
  }

// pizza Romeu e Julieta

  adicionarRomeueJulieta(){
    this.quantidadeRomeueJulieta = ++this.quantidadeRomeueJulieta
  }

  removerRomeueJulieta(){
    this.quantidadeRomeueJulieta  = --this.quantidadeRomeueJulieta 
    if(this.quantidadeRomeueJulieta == 0){
      this.quantidadeRomeueJulieta  = 1
    }
  }
  // pizza prestígio
  
    adicionarPrestigio(){
      this.quantidadePrestigio = ++this.quantidadePrestigio
    }
  
    removerPrestigio(){
      this.quantidadePrestigio  = --this.quantidadePrestigio 
      if(this.quantidadePrestigio == 0){
        this.quantidadePrestigio  = 1
      }
    }

  // pizza Brigadeiro
  
    adicionarBrigadeiro(){
      this.quantidadeBrigadeiro = ++this.quantidadeBrigadeiro
    }
  
    removerBrigadeiro(){
      this.quantidadeBrigadeiro  = --this.quantidadeBrigadeiro 
      if(this.quantidadeBrigadeiro == 0){
        this.quantidadeBrigadeiro  = 1
      }
    }
  // pizza Brigadeiro
  
    adicionarDoceNinho(){
      this.quantidadeDoceNinho = ++this.quantidadeDoceNinho
    }
  
    removerDoceNinho(){
      this.quantidadeDoceNinho  = --this.quantidadeDoceNinho 
      if(this.quantidadeDoceNinho == 0){
        this.quantidadeDoceNinho  = 1
      }
    }

  // pizza Brigadeiro
  
    adicionarFlorestaNegra(){
      this.quantidadeFlorestaNegra = ++this.quantidadeFlorestaNegra
    }
  
    removerFlorestaNegra(){
      this.quantidadeFlorestaNegra  = --this.quantidadeFlorestaNegra 
      if(this.quantidadeFlorestaNegra == 0){
        this.quantidadeFlorestaNegra  = 1
      }
    }

  // pizza KitKat
  
  adicionarKitKat() {
    this.quantidadeKitKat = ++this.quantidadeKitKat;
  }
  
  removerKitKat() {
    this.quantidadeKitKat = --this.quantidadeKitKat;
    if (this.quantidadeKitKat === 0) {
      this.quantidadeKitKat = 1;
    }
  }

  // adicionar pizza nutella

  adicionarNutella() {
    this.quantidadeNutella = ++this.quantidadeNutella;
  }

  removerNutella() {
    this.quantidadeNutella = --this.quantidadeNutella;
    if (this.quantidadeNutella === 0) {
      this.quantidadeNutella = 1;
    }
  }

  // adicionar pizzza ninho nutella

  adicionarNinhoNutela() {
    this.quantidadeNinhoNutela = ++this.quantidadeNinhoNutela;
  }

  removerNinhoNutela() {
    this.quantidadeNinhoNutela = --this.quantidadeNinhoNutela;
    if (this.quantidadeNinhoNutela === 0) {
      this.quantidadeNinhoNutela = 1;
    }
  }

  // adicionar sensacao

  adicionarSensacao() {
    this.quantidadeSensacao = ++this.quantidadeSensacao;
  }

  removerSensacao() {
    this.quantidadeSensacao = --this.quantidadeSensacao;
    if (this.quantidadeSensacao === 0) {
      this.quantidadeSensacao = 1;
    }
  }
  // adicionar oreo

  
  adicionarOreo() {
    this.quantidadeOreo = ++this.quantidadeOreo;
  }

  removerOreo() {
    this.quantidadeOreo = --this.quantidadeOreo;
    if (this.quantidadeOreo === 0) {
      this.quantidadeOreo = 1;
    }
  }
  
  // adicionar quantidadeMeM
  
  adicionarMeM() {
    this.quantidadeMeM = ++this.quantidadeMeM
  }

  removerMeM() {
    this.quantidadeMeM = --this.quantidadeMeM
    if (this.quantidadeMeM === 0) {
      this.quantidadeMeM = 1;
    }
  }
}




