import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapiocasComponent } from './tapiocas.component';

describe('TapiocasComponent', () => {
  let component: TapiocasComponent;
  let fixture: ComponentFixture<TapiocasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapiocasComponent]
    });
    fixture = TestBed.createComponent(TapiocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
