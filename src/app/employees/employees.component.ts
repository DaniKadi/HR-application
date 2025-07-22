import { Component, OnInit } from '@angular/core';
import { Employee } from '../core/models/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../core/services/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
employees: Employee[] = []
constructor(private employeeService: EmployeeService
, private router: Router
) {}


ngOnInit() {
      this.employees = this.employeeService.getEmployees();
}
editEmployee(id?: number) {
  if (id) {
    this.router.navigate(['employees/manage-employee'], { queryParams: { id } });
  } else {
    this.router.navigate(['employees/manage-employee']);
  }
}
}
