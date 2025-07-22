import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseChartsComponent } from './expense-charts/expense-charts.component';

const routes: Routes = [
  {path: '', component: ExpensesComponent },
  {path: 'expense-form', component: ExpenseFormComponent },
  {path: 'expense-charts', component: ExpenseChartsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
