import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPagsComponent } from './inicio-pags.component';

describe('InicioPagsComponent', () => {
  let component: InicioPagsComponent;
  let fixture: ComponentFixture<InicioPagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioPagsComponent]
    });
    fixture = TestBed.createComponent(InicioPagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
