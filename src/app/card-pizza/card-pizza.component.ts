import { Component } from '@angular/core';

@Component({
  selector: 'app-card-pizza',
  templateUrl: './card-pizza.component.html',
  styleUrls: ['./card-pizza.component.css']
})
export class CardPizzaComponent {
  pizzasComputadasNome:Array <string> = []
  pizzasComputadasQuantidade:Array <string | number> = []
  pizzasComputadasPreco:Array <string | number> = []
  quantidadeMargherita:number = 1
  quantidadeDoisQueijos:number = 1
  quantidadeMussache:number = 1
  quantidadeMilho:number = 1
  quantidadeMussarela:number = 1
  quantidadeNapolitana:number = 1
  quantidadeTresQueijos:number = 1
  quantidadePresunto:number = 1
  quantidadeMista:number = 1
  quantidadeCalabresa:number = 1
  quantidadeFrango:number = 1
  quantidadeFrangoCatupity:number = 1
  quantidadeFrancheddar:number = 1
  quantidadeQueroMais:number = 1
  quantidadeBolonhesa:number = 1
  quantidadeLomboCanadense:number = 1
  quantidadePortuguesa:number = 1
  quantidadeDomCostela:number = 1
  quantidadeDomGrega:number = 1
  quantidadeQuatroQueijos:number = 1
  quantidadeLomboQueijos:number = 1
  quantidadeCalabresaBarbecue:number = 1
  quantidadeFrangoBarbecue:number = 1
  quantidade3Queijos:number = 1
  quantidadeCalafrita:number = 1
  quantidadeAgrestina:number = 1
  quantidadeMatuta:number = 1
  quantidadeFritache:number = 1
  quantidadeCarneSolBarbecue:number = 1
  quantidadeCharqueBarbecue:number = 1
  quantidadeCalabaconBarbecue:number = 1
  quantidadeSolfrita:number = 1
  //margherita
  pegarInfoPizza(nomePedido: string, quantidade:number, custo:number){
    this.pizzasComputadasNome.push(nomePedido)
    this.pizzasComputadasQuantidade.push(quantidade)
    this.pizzasComputadasPreco.push(custo)
  }
  //***********************/
  //Margherita
  adicionarMargherita(){
    this.quantidadeMargherita = ++this.quantidadeMargherita
  }
  removerMargherita(){
    this.quantidadeMargherita = --this.quantidadeMargherita
    if(this.quantidadeMargherita == 0){
      this.quantidadeMargherita = 1
    }
  }
  /************************/
  //Dois Queijos
  adicionarDoisQueijos(){
    this.quantidadeDoisQueijos = ++this.quantidadeDoisQueijos
  }
  removerDoisQueijos(){
    this.quantidadeDoisQueijos = --this.quantidadeDoisQueijos
    if(this.quantidadeDoisQueijos == 0){
      this.quantidadeDoisQueijos = 1
    }
  }
  /************************/
  //Mussache
  adicionarMussache(){
    this.quantidadeMussache = ++this.quantidadeMussache
  }
  removerMussache(){
    this.quantidadeMussache = --this.quantidadeMussache
    if(this.quantidadeMussache == 0){
      this.quantidadeMussache = 1
    }
  }
  /************************/
  //Milho
  adicionarMilho(){
    this.quantidadeMilho = ++this.quantidadeMilho
  }
  removerMilho(){
    this.quantidadeMilho = --this.quantidadeMilho
    if(this.quantidadeMilho == 0){
      this.quantidadeMilho = 1
    }
  }
  /************************/
  //Mussarela
  adicionarMussarela(){
    this.quantidadeMussarela = ++this.quantidadeMussarela
  }
  removerMussarela(){
    this.quantidadeMussarela = --this.quantidadeMussarela
    if(this.quantidadeMussarela == 0){
      this.quantidadeMussarela = 1
    }
  }
  /************************/
  //Napolitana
  adicionarNapolitana(){
    this.quantidadeNapolitana = ++this.quantidadeNapolitana
  }
  removerNapolitana(){
    this.quantidadeNapolitana = --this.quantidadeNapolitana
    if(this.quantidadeNapolitana == 0){
      this.quantidadeNapolitana = 1
    }
  }
  /************************/
  //Tres queijos
  adicionarTresQueijos(){
    this.quantidadeTresQueijos = ++this.quantidadeTresQueijos
  }
  removerTresQueijos(){
    this.quantidadeTresQueijos = --this.quantidadeTresQueijos
    if(this.quantidadeTresQueijos == 0){
      this.quantidadeTresQueijos = 1
    }
  }
  /************************/
  //Presunto
  adicionarPresunto(){
    this.quantidadePresunto = ++this.quantidadePresunto
  }
  removerPresunto(){
    this.quantidadePresunto = --this.quantidadePresunto
    if(this.quantidadePresunto == 0){
      this.quantidadePresunto = 1
    }
  }
  /************************/
  //Mista
  adicionarMista(){
    this.quantidadeMista = ++this.quantidadeMista
  }
  removerMista(){
    this.quantidadeMista = --this.quantidadeMista
    if(this.quantidadeMista == 0){
      this.quantidadeMista = 1
    }
  }
  /************************/
  //Calabresa
  adicionarCalabresa(){
    this.quantidadeCalabresa = ++this.quantidadeCalabresa
  }
  removerCalabresa(){
    this.quantidadeCalabresa = --this.quantidadeCalabresa
    if(this.quantidadeCalabresa == 0){
      this.quantidadeCalabresa = 1
    }
  }
  /************************/
  //Frango
  adicionarFrango(){
    this.quantidadeFrango = ++this.quantidadeFrango
  }
  removerFrango(){
    this.quantidadeFrango = --this.quantidadeFrango
    if(this.quantidadeFrango == 0){
      this.quantidadeFrango = 1
    }
  }
  /************************/
  //FrangoCatupity
  adicionarFrangoCatupity(){
    this.quantidadeFrangoCatupity = ++this.quantidadeFrangoCatupity
  }
  removerFrangoCatupity(){
    this.quantidadeFrangoCatupity = --this.quantidadeFrangoCatupity
    if(this.quantidadeFrangoCatupity == 0){
      this.quantidadeFrangoCatupity = 1
    }
  }
  /************************/
  //Francheddar
  adicionarFrancheddar(){
    this.quantidadeFrancheddar = ++this.quantidadeFrancheddar
  }
  removerFrancheddar(){
    this.quantidadeFrancheddar = --this.quantidadeFrancheddar
    if(this.quantidadeFrancheddar == 0){
      this.quantidadeFrancheddar = 1
    }
  }
  /************************/
  //QueroMais
  adicionarQueroMais(){
    this.quantidadeQueroMais = ++this.quantidadeQueroMais
  }
  removerQueroMais(){
    this.quantidadeQueroMais = --this.quantidadeQueroMais
    if(this.quantidadeQueroMais == 0){
      this.quantidadeQueroMais = 1
    }
  }
  /************************/
  //Bolonhesa
  adicionarBolonhesa(){
    this.quantidadeBolonhesa = ++this.quantidadeBolonhesa
  }
  removerBolonhesa(){
    this.quantidadeBolonhesa = --this.quantidadeBolonhesa
    if(this.quantidadeBolonhesa == 0){
      this.quantidadeBolonhesa = 1
    }
  }
  /************************/
  //LomboCanadense
  adicionarLomboCanadense(){
    this.quantidadeLomboCanadense = ++this.quantidadeLomboCanadense
  }
  removerLomboCanadense(){
    this.quantidadeLomboCanadense = --this.quantidadeLomboCanadense
    if(this.quantidadeLomboCanadense == 0){
      this.quantidadeLomboCanadense = 1
    }
  }
  /************************/
  //Portuguesa
  adicionarPortuguesa(){
    this.quantidadePortuguesa = ++this.quantidadePortuguesa
  }
  removerPortuguesa(){
    this.quantidadePortuguesa = --this.quantidadePortuguesa
    if(this.quantidadePortuguesa == 0){
      this.quantidadePortuguesa = 1
    }
  }
  /************************/
    //Dom Costela
    adicionarDomCostela(){
      this.quantidadeDomCostela = ++this.quantidadeDomCostela
    }
    removerDomCostela(){
      this.quantidadeDomCostela = --this.quantidadeDomCostela
      if(this.quantidadeDomCostela == 0){
        this.quantidadeDomCostela = 1
      }
    }
    /************************/
    //Dom Grega
    adicionarDomGrega(){
      this.quantidadeDomGrega = ++this.quantidadeDomGrega
    }
    removerDomGrega(){
      this.quantidadePortuguesa = --this.quantidadeDomGrega
      if(this.quantidadeDomGrega == 0){
        this.quantidadeDomGrega = 1
      }
    }
    /************************/
    //QuatroQueijos
    adicionarQuatroQueijos(){
      this.quantidadeQuatroQueijos = ++this.quantidadeQuatroQueijos
    }
    removerQuatroQueijos(){
      this.quantidadeQuatroQueijos = --this.quantidadeQuatroQueijos
      if(this.quantidadeQuatroQueijos == 0){
        this.quantidadeQuatroQueijos = 1
      }
    }
    /************************/
    //LomboQueijos
    adicionarLomboQueijos(){
      this.quantidadeLomboQueijos = ++this.quantidadeLomboQueijos
    }
    removerLomboQueijos(){
      this.quantidadeLomboQueijos = --this.quantidadeLomboQueijos
      if(this.quantidadeLomboQueijos == 0){
        this.quantidadeLomboQueijos = 1
      }
    }
    /************************/
    //LomboCalabresaBarbecue
    adicionarCalabresaBarbecue(){
      this.quantidadeCalabresaBarbecue = ++this.quantidadeCalabresaBarbecue
    }
    removerCalabresaBarbecue(){
      this.quantidadeCalabresaBarbecue = --this.quantidadeCalabresaBarbecue
      if(this.quantidadeCalabresaBarbecue == 0){
        this.quantidadeCalabresaBarbecue = 1
      }
    }
    /************************/
    //FrangoBarbecue
    adicionarFrangoBarbecue(){
      this.quantidadeFrangoBarbecue = ++this.quantidadeFrangoBarbecue
    }
    removerFrangoBarbecue(){
      this.quantidadeFrangoBarbecue = --this.quantidadeFrangoBarbecue
      if(this.quantidadeFrangoBarbecue == 0){
        this.quantidadeFrangoBarbecue = 1
      }
    }
    /************************/
    //3Queijos
    adicionar3Queijos(){
      this.quantidade3Queijos = ++this.quantidade3Queijos
    }
    remover3Queijos(){
      this.quantidade3Queijos = --this.quantidade3Queijos
      if(this.quantidade3Queijos == 0){
        this.quantidade3Queijos = 1
      }
    }
    /************************/
    //3Queijos
    adicionarCalafrita(){
      this.quantidadeCalafrita = ++this.quantidadeCalafrita
    }
    removerCalafrita(){
      this.quantidadeCalafrita = --this.quantidadeCalafrita
      if(this.quantidadeCalafrita == 0){
        this.quantidadeCalafrita = 1
      }
    }
    /************************/
    //Agrestina
    adicionarAgrestina(){
      this.quantidadeAgrestina = ++this.quantidadeAgrestina
    }
    removerAgrestina(){
      this.quantidadeAgrestina = --this.quantidadeAgrestina
      if(this.quantidadeAgrestina == 0){
        this.quantidadeAgrestina = 1
      }
    }
    /************************/
    //Matuta
    adicionarMatuta(){
      this.quantidadeMatuta = ++this.quantidadeMatuta
    }
    removerMatuta(){
      this.quantidadeMatuta = --this.quantidadeMatuta
      if(this.quantidadeMatuta == 0){
        this.quantidadeMatuta = 1
      }
    }
    /************************/
    //Matuta
    adicionarFritache(){
      this.quantidadeFritache = ++this.quantidadeFritache
    }
    removerFritache(){
      this.quantidadeFritache = --this.quantidadeFritache
      if(this.quantidadeFritache == 0){
        this.quantidadeFritache = 1
      }
    }
    /************************/
    //Matuta
    adicionarCarneSolBarbecue(){
      this.quantidadeCarneSolBarbecue = ++this.quantidadeCarneSolBarbecue
    }
    removerCarneSolBarbecue(){
      this.quantidadeCarneSolBarbecue = --this.quantidadeCarneSolBarbecue
      if(this.quantidadeCarneSolBarbecue == 0){
        this.quantidadeCarneSolBarbecue = 1
      }
    }
    /************************/
    //Matuta
    adicionarCharqueBarbecue(){
      this.quantidadeCharqueBarbecue = ++this.quantidadeCharqueBarbecue
    }
    removerCharqueBarbecue(){
      this.quantidadeCharqueBarbecue = --this.quantidadeCharqueBarbecue
      if(this.quantidadeCharqueBarbecue == 0){
        this.quantidadeCharqueBarbecue = 1
      }
    }
    /************************/
    //CalabaconBarbecue
    adicionarCalabaconBarbecue(){
      this.quantidadeCalabaconBarbecue = ++this.quantidadeCalabaconBarbecue
    }
    removerCalabaconBarbecue(){
      this.quantidadeCalabaconBarbecue = --this.quantidadeCalabaconBarbecue
      if(this.quantidadeCalabaconBarbecue == 0){
        this.quantidadeCalabaconBarbecue = 1
      }
    }
    /************************/
    //CalabaconBarbecue
    adicionarSolfrita(){
      this.quantidadeSolfrita = ++this.quantidadeSolfrita
    }
    removerSolfrita(){
      this.quantidadeSolfrita = --this.quantidadeSolfrita
      if(this.quantidadeSolfrita == 0){
        this.quantidadeSolfrita = 1
      }
    }
    /************************/
}
