import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPizzaSalgadaComponent } from './card-pizza-salgada.component';

describe('CardPizzaSalgadaComponent', () => {
  let component: CardPizzaSalgadaComponent;
  let fixture: ComponentFixture<CardPizzaSalgadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPizzaSalgadaComponent]
    });
    fixture = TestBed.createComponent(CardPizzaSalgadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
