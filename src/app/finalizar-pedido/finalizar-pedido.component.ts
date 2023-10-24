import { Component } from '@angular/core';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent {
  mudarCorBotao(){
    let materialicons = document.querySelector("#icon") as HTMLElement
    let quantidade = document.querySelector("#quantidade") as HTMLElement
    materialicons.style.color = "white"
    quantidade.style.scale = "1.2"
  }
  
  mudarCorBotaoSair(){
    let materialicons = document.querySelector("#icon") as HTMLElement
    let quantidade = document.querySelector("#quantidade") as HTMLElement
    materialicons.style.color = "rgb(192, 188, 188)"
    quantidade.style.scale = "1.0"
  }
}
