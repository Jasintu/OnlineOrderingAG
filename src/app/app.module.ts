import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { CardPizzaSalgadaComponent } from './card-pizza-salgada/card-pizza-salgada.component';
import { CardPizzaComponent } from './card-pizza/card-pizza.component';
import { PizzasDocesComponent } from './pizzas-doces/pizzas-doces.component';
import { FritasComponent } from './fritas/fritas.component';
import { CuscuzGourmetComponent } from './cuscuz-gourmet/cuscuz-gourmet.component';
import { AdicionaisPizzaComponent } from './adicionais-pizza/adicionais-pizza.component';
import { TapiocasComponent } from './tapiocas/tapiocas.component';
import { FormsModule } from '@angular/forms';
import { CompartilharInformacaoPedidoComponent } from './compartilhar-informacao-pedido/compartilhar-informacao-pedido.component';
import { CompartilhamentoParapagamentoComponent } from './compartilhamento-parapagamento/compartilhamento-parapagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FinalizarPedidoComponent,
    RestaurantMenuComponent,
    CardPizzaSalgadaComponent,
    CardPizzaComponent,
    PizzasDocesComponent,
    FritasComponent,
    CuscuzGourmetComponent,
    AdicionaisPizzaComponent,
    TapiocasComponent,
    CompartilharInformacaoPedidoComponent,
    CompartilhamentoParapagamentoComponent,
  ],
  exports:[
    FritasComponent,
    PizzasDocesComponent,
    CompartilhamentoParapagamentoComponent,
    FinalizarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
