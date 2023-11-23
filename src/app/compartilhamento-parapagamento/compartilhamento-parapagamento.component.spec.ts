import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhamentoParapagamentoComponent } from './compartilhamento-parapagamento.component';

describe('CompartilhamentoParapagamentoComponent', () => {
  let component: CompartilhamentoParapagamentoComponent;
  let fixture: ComponentFixture<CompartilhamentoParapagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartilhamentoParapagamentoComponent]
    });
    fixture = TestBed.createComponent(CompartilhamentoParapagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
