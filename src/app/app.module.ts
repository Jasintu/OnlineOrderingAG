import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { CardPizzaSalgadaComponent } from './card-pizza-salgada/card-pizza-salgada.component';
import { CardPizzaComponent } from './card-pizza/card-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FinalizarPedidoComponent,
    RestaurantMenuComponent,
    CardPizzaSalgadaComponent,
    CardPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
