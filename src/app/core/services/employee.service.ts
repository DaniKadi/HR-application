import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private employees: Employee[] = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@example.com', departmentId: 2 },
    { id: 2, name: 'Ahmed Khan', email: 'ahmed.khan@example.com', departmentId: 1 },
    { id: 3, name: 'Emily Davis', email: 'emily.davis@example.com', departmentId: 2 },
    { id: 4, name: 'Rami El-Hassan', email: 'rami.hassan@example.com', departmentId: 3 },
    { id: 5, name: 'Julia Martínez', email: 'julia.martinez@example.com', departmentId: 2 },
    { id: 6, name: 'Omar Farouk', email: 'omar.farouk@example.com', departmentId: 1 }
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }
  updateEmployee(employee: Employee) {
    const index = this.employees.findIndex(emp => emp.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }
  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }
}
