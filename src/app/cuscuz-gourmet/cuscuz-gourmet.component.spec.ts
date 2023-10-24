import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscuzGourmetComponent } from './cuscuz-gourmet.component';

describe('CuscuzGourmetComponent', () => {
  let component: CuscuzGourmetComponent;
  let fixture: ComponentFixture<CuscuzGourmetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuscuzGourmetComponent]
    });
    fixture = TestBed.createComponent(CuscuzGourmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
