import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContpaqiComponent } from './contpaqi.component';

describe('ContpaqiComponent', () => {
  let component: ContpaqiComponent;
  let fixture: ComponentFixture<ContpaqiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContpaqiComponent]
    });
    fixture = TestBed.createComponent(ContpaqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
