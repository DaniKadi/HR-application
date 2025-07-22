import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Employee } from '../../core/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})

export class ManageEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employee: Employee | undefined;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      departmentId: [null, Validators.required]
    });
    this.getEmployee();
  }
  getEmployee(){
    this.route.queryParams.subscribe(params => {
    const id = params['id'];
    if (id) {
   this.employee= this.employeeService.getEmployeeById(Number(id));
   console.log('Editing employee:', this.employee);
    if (this.employee) {
        this.employeeForm.patchValue({
          name: this.employee.name,
          email: this.employee.email,
          departmentId: this.employee.departmentId
        });}
    } else {
      console.log('Creating new employee');
    }
    
  });

  }

  onSubmit(): void {
    if (this.employeeForm.valid && !this.employee) {
      const newEmployee: Employee = this.employeeForm.value;
      this.employeeService.addEmployee(newEmployee);
      alert('Employee added successfully')
    }
    else{
      if (this.employee) {
        this.employee.name = this.employeeForm.value.name;
        this.employee.email = this.employeeForm.value.email;
        this.employee.departmentId = this.employeeForm.value.departmentId;
        alert('Employee updated successfully');
        this.employeeService.updateEmployee(this.employee);
      }
    }
    this.router.navigate(['employees']);

  }
}