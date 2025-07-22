import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Leave, LeaveType } from '../../core/models/leaves.model'; 
import { Router } from '@angular/router';
import { LeavesService } from 'src/app/core/services/leaves.service';
@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {
  leaveForm!: FormGroup;
  leaveTypes: LeaveType[] = [];

  constructor(
    private fb: FormBuilder,
    private leavesService: LeavesService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      leaveTypeId: [null, Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required],
      numberOfDays: [{ value: null, disabled: true }],
      note: [''],
      employeeId: [null, Validators.required]
    });

    this.leaveTypes = [
      { id: 1, name: 'Annual Leave' },
      { id: 2, name: 'Sick Leave' },
      { id: 3, name: 'Personal Leave' }
    ];

    this.leaveForm.get('from')?.valueChanges.subscribe(() => this.calculateDays());
    this.leaveForm.get('to')?.valueChanges.subscribe(() => this.calculateDays());
  }

  calculateDays(): void {
    const from = new Date(this.leaveForm.get('from')?.value);
    const to = new Date(this.leaveForm.get('to')?.value);

    if (!isNaN(from.getTime()) && !isNaN(to.getTime()) && from <= to) {
      const diff = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      this.leaveForm.get('numberOfDays')?.setValue(diff);
    } else {
      this.leaveForm.get('numberOfDays')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const leaveTypeId = Number(this.leaveForm.value.leaveTypeId);
      const leave: Leave = {
        leaveType: this.leaveTypes.find(type => type.id === leaveTypeId),
        from: this.leaveForm.value.from,
        to: this.leaveForm.value.to,
        numberOfDays: this.leaveForm.get('numberOfDays')?.value,
        note: this.leaveForm.value.note,
        employeeId: Number(this.leaveForm.value.employeeId)
      };

      this.leavesService.addLeave(leave);
      alert('Leave request submitted successfully!');
      this.router.navigate(['/leaves']);
    }
  }
}


