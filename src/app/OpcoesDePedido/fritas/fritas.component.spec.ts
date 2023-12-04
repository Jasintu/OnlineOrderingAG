import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritasComponent } from './fritas.component';

describe('FritasComponent', () => {
  let component: FritasComponent;
  let fixture: ComponentFixture<FritasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FritasComponent]
    });
    fixture = TestBed.createComponent(FritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
