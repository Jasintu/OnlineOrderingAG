import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  mostrarConteudo: number = 1;
  toggleContent() {
    this.mostrarConteudo = this.mostrarConteudo === 1 ? 2 : 1;
  }
}
