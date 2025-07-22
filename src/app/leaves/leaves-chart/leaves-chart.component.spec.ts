import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesChartComponent } from './leaves-chart.component';

describe('LeavesChartComponent', () => {
  let component: LeavesChartComponent;
  let fixture: ComponentFixture<LeavesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavesChartComponent]
    });
    fixture = TestBed.createComponent(LeavesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
