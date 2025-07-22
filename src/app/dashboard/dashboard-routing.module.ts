import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employees', loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule) },
  {path: 'leaves', loadChildren: () => import('../leaves/leaves.module').then(m => m.LeavesModule) },
  {path: 'expenses', loadChildren: () => import('../expenses/expenses.module').then(m => m.ExpensesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
