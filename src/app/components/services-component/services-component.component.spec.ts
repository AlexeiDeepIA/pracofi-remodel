import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponentComponent } from './services-component.component';

describe('ServicesComponentComponent', () => {
  let component: ServicesComponentComponent;
  let fixture: ComponentFixture<ServicesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesComponentComponent]
    });
    fixture = TestBed.createComponent(ServicesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
