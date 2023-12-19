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

  pizzaComputadas:string = `
  **Pedido de Pizza**

  **Nome do Cliente:** ${this.nomeCliente}
  **Número de Contato:** [Seu Número de Telefone]

  **Itens do Pedido:**
  1. **Prestígio**
    - Quantidade: [Quantidade]
    - Preço: $[Preço Total]

  2. **Kit Kat**
    - Quantidade: [Quantidade]
    - Preço: $[Preço Total]

  3. **Nutella**
    - Quantidade: [Quantidade]
    - Preço: $[Preço Total]

  4. **Ninho c/ Nutela**
    - Quantidade: [Quantidade]
    - Preço: $[Preço Total]

  5. **Sensação**
    - Quantidade: [Quantidade]
    - Preço: $[Preço Total]

  6. **Óreo**
    - Quantidade: [Quantidade]
    - Preço: $[Preço Total]

  7. **m&m**
    - Quantidade: [Quantidade]
    - Preço: $[Preço Total]

  **Total do Pedido:** $[Total Geral]

  **Observações Adicionais:**
  [Observações adicionais, se houver]

  Por favor, entre em contato para confirmar o pedido. Obrigado!
  `

  linkDinamico!:string

  enviarPedido(){
    const mensagemPedido = `https://wa.me/5587981051712?text=Negros%20${this.pizzaComputadas}%20topo`
    this.linkDinamico = mensagemPedido
  }
}
