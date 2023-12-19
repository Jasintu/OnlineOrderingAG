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
    this.pedidosContados = this.pedidosContados - item.quantidade
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
  pedidosContados:number = 0
//------------------------------------------------- 

  adicionarPedidoRepetido(pedido: { nome: string, quantidade: number, preco: number }){
    const indiceExistente = this.pedidos.findIndex(objeto => objeto.nome === pedido.nome)
    if (indiceExistente === -1) {
      this.pedidos.push({ ...pedido })
      this.total = this.total + pedido.preco
      this.pedidosContados = this.pedidosContados + pedido.quantidade
    } else {
      this.pedidos[indiceExistente].preco += pedido.preco
      this.pedidos[indiceExistente].quantidade += pedido.quantidade
      this.total = this.total + pedido.preco
      this.pedidosContados = this.pedidosContados + pedido.quantidade
    }
  }
  
  handleReceberInfoPizza(pizza: { nome: string, quantidade: number, preco: number }) {
    this.adicionarPedidoRepetido(pizza)
  }
  
  handleReceberInfoBatataFrita(batataFrita: { nome: string, quantidade: number, preco: number }){
    this.adicionarPedidoRepetido(batataFrita)
  }
  
  handleReceberInfoPizzaDoce(pizzaDoce: { nome: string, quantidade: number, preco: number }){
    this.adicionarPedidoRepetido(pizzaDoce)
  }

// funcao enviar pedido
  nomeCliente:string = "Henrique Antonio"
  endereco:string = "Rua Gonzaguinha n100° Por trás do caps ao lado de roni que conserta som"
  pizzaComputadas:string = `
  🍕 Pedido Confirmado! 🍕

  Olá ${this.nomeCliente}! Seu pedido foi recebido e está sendo preparado. Aqui estão os detalhes:

  📋 **Detalhes do Pedido:**
  - Pizza Doce: [Sabor da Pizza Doce]
  - Batata Frita: [Quantidade] porção(s)
  - Bebidas: [Lista de Bebidas]
  - Tapiocas: [Quantidade] tapioca(s) de [Sabor da Tapioca]

  📍 **Endereço de Entrega:**
  ${this.endereco}

  Fique de olho no seu celular, nossa equipe está a caminho! Se precisar de algo extra ou tiver instruções especiais, nos avise.

  Agradecemos pela preferência! Bom apetite! 🚀🍽️
  `
  mensagemFormatada = encodeURIComponent(this.pizzaComputadas);
  
  enviarPedido(){
    const mensagemPedido = `https://wa.me/5587981051712?text=${this.mensagemFormatada}`
    this.linkDinamico = mensagemPedido
  }

  linkDinamico!:string
}
