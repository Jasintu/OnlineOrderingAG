import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilharInformacaoPedidoComponent } from './compartilhar-informacao-pedido.component';

describe('CompartilharInformacaoPedidoComponent', () => {
  let component: CompartilharInformacaoPedidoComponent;
  let fixture: ComponentFixture<CompartilharInformacaoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartilharInformacaoPedidoComponent]
    });
    fixture = TestBed.createComponent(CompartilharInformacaoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
