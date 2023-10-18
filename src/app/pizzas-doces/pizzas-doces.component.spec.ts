import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasDocesComponent } from './pizzas-doces.component';

describe('PizzasDocesComponent', () => {
  let component: PizzasDocesComponent;
  let fixture: ComponentFixture<PizzasDocesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasDocesComponent]
    });
    fixture = TestBed.createComponent(PizzasDocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
