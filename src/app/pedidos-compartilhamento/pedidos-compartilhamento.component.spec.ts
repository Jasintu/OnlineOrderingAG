import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCompartilhamentoComponent } from './pedidos-compartilhamento.component';

describe('PedidosCompartilhamentoComponent', () => {
  let component: PedidosCompartilhamentoComponent;
  let fixture: ComponentFixture<PedidosCompartilhamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosCompartilhamentoComponent]
    });
    fixture = TestBed.createComponent(PedidosCompartilhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
