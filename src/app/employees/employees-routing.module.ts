import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

const routes: Routes = [
    { path: '', component: EmployeesComponent },
    { path: 'manage-employee', component: ManageEmployeeComponent },
    { path: 'manage-employee/:id', component: ManageEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
