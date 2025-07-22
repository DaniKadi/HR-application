import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    ManageEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
