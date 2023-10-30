import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})


export class PagamentoComponent {
  opcaoPix(){
    let pix = document.querySelector("#pix") as HTMLElement
    let cartao = document.querySelector("#cartao") as HTMLElement
    let dinheiro = document.querySelector("#dinheiro") as HTMLElement
    if(pix.style.backgroundColor == "rgb(43, 42, 42)"){
      pix.style.backgroundColor = "white"
    }else{
      pix.style.backgroundColor = "rgb(43, 42, 42)"
      cartao.style.backgroundColor = "white"
      dinheiro.style.backgroundColor = "white"
    }
  }
  opcaoCartao(){
    let pix = document.querySelector("#pix") as HTMLElement
    let cartao = document.querySelector("#cartao") as HTMLElement
    let dinheiro = document.querySelector("#dinheiro") as HTMLElement
    if(cartao.style.backgroundColor == "rgb(43, 42, 42)"){
      cartao.style.backgroundColor = "white"
    }else{
      cartao.style.backgroundColor = "rgb(43, 42, 42)"
      pix.style.backgroundColor = "white"
      dinheiro.style.backgroundColor = "white"
    }
  }
  opcaoDinheiro(){
    let pix = document.querySelector("#pix") as HTMLElement
    let cartao = document.querySelector("#cartao") as HTMLElement
    let dinheiro = document.querySelector("#dinheiro") as HTMLElement
    if(dinheiro.style.backgroundColor == "rgb(43, 42, 42)"){
      dinheiro.style.backgroundColor = "white"
    }else{
      dinheiro.style.backgroundColor = "rgb(43, 42, 42)"
      cartao.style.backgroundColor = "white"
      pix.style.backgroundColor = "white"
    }
  }
}
