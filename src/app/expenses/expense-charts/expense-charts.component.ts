import { Component } from '@angular/core';
import { ExpenseClaimDetail, Type } from 'src/app/core/models/expense-claim.model';
import { ExpensesService } from 'src/app/core/services/expenses.service';

@Component({
  selector: 'app-expense-charts',
  templateUrl: './expense-charts.component.html',
  styleUrls: ['./expense-charts.component.scss']
})
export class ExpenseChartsComponent {
chartData: { label: string; value: number }[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    const claims = this.expensesService.getExpenseClaims();
    const allDetails: ExpenseClaimDetail[] = claims.flatMap(c => c.details ?? []);

    const totalsByType: Record<string, number> = {};
    Object.values(Type).forEach(type => totalsByType[type] = 0);

    for (const detail of allDetails) {
      if (detail.type && detail.total) {
        totalsByType[detail.type] += detail.total;
      }
    }

    const totalSum = Object.values(totalsByType).reduce((acc, v) => acc + v, 0);
    this.chartData = Object.entries(totalsByType).map(([label, value]) => ({
      label,
      value: totalSum > 0 ? (value / totalSum) * 100 : 0  
    }));

  }
}
