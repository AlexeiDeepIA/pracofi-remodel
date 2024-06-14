import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDashboardPageComponent } from './news-dashboard-page.component';

describe('NewsDashboardPageComponent', () => {
  let component: NewsDashboardPageComponent;
  let fixture: ComponentFixture<NewsDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDashboardPageComponent]
    });
    fixture = TestBed.createComponent(NewsDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
