import { Component } from '@angular/core';
import { ExpenseClaim } from '../core/models/expense-claim.model';
import { ExpensesService } from '../core/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  expenseClaims: ExpenseClaim[] = [];
  employeeIds: number[] = [];
  selectedEmployeeId: number | null = null;
  constructor(private expensesService: ExpensesService) {}
  ngOnInit(): void {
    this.expenseClaims = this.expensesService.getExpenseClaims();
    this.employeeIds = this.expensesService.getEmployeeIds();
  }
  onEmployeeChange(employeeId: number | null): void {
    this.selectedEmployeeId = employeeId;
    if (employeeId) {
      this.expenseClaims = this.expensesService.getClaimsByEmployeeId(employeeId);
    } else {
      this.expenseClaims = this.expensesService.getExpenseClaims();
    }
  }
}
