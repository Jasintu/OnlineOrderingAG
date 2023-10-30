import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarBotao = false
  toggleBotao() {
    this.mostrarBotao = !this.mostrarBotao
  }
}
