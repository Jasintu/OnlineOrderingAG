import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaisPizzaComponent } from './adicionais-pizza.component';

describe('AdicionaisPizzaComponent', () => {
  let component: AdicionaisPizzaComponent;
  let fixture: ComponentFixture<AdicionaisPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionaisPizzaComponent]
    });
    fixture = TestBed.createComponent(AdicionaisPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
