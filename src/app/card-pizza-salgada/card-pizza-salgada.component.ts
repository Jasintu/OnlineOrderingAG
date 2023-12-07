import { Component, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-card-pizza-salgada',
  templateUrl: './card-pizza-salgada.component.html',
  styleUrls: ['./card-pizza-salgada.component.css'],
})
export class CardPizzaSalgadaComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

//------------------------------------------------- 
  animationState = 'visible';

  removerItem(index: any) {
    this.pedidos.splice(index, 1)
    this.total.splice(index, 1)
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

  total:number[] = []

  calcularSoma(): number {
    return this.total.reduce((acc, num) => acc + num, 0)
  }

//------------------------------------------------- 

  adicionarPedidoRepetido() {
    const objetosRepetidos = this.pedidos.filter((objeto, index, self) => {
      const indicePrimeiraOcorrencia = self.findIndex((el) => el.nome === objeto.nome);
      const repetido = indicePrimeiraOcorrencia !== index;
      if (repetido) {
        console.log(`Objeto repetido encontrado: ${JSON.stringify(objeto)}`);
      }else{
        console.log('foi');
      }
    });
  }
  
  handleReceberInfoPizza(pizza: { nome: string, quantidade: number, preco: number }){
    this.pedidos.push(pizza)
    this.adicionarPedidoRepetido()
    this.total.push(pizza.preco)
  }
  
  handleReceberInfoBatataFrita(batataFrita: { nome: string, quantidade: number, preco: number }){
    this.pedidos.push(batataFrita)
    this.total.push(batataFrita.preco)
  }

}
