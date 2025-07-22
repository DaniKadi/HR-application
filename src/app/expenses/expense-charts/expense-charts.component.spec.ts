import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseChartsComponent } from './expense-charts.component';

describe('ExpenseChartsComponent', () => {
  let component: ExpenseChartsComponent;
  let fixture: ComponentFixture<ExpenseChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseChartsComponent]
    });
    fixture = TestBed.createComponent(ExpenseChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
