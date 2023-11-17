import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayPagamento:boolean = true
  toggleContent() {
    this.displayPagamento = !this.displayPagamento
  }
}
