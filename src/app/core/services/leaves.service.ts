import { Injectable } from '@angular/core';
import { Leave } from '../models/leaves.model';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  private leave: Leave[]=[  {
    id: 1,
    employeeId: 1,
    leaveType: { id: 1, name: 'Annual Leave' },
    from: new Date('2025-07-01'),
    to: new Date('2025-07-05'),
    numberOfDays: 5,
    note: 'Family vacation'
  },
  {
    id: 2,
    employeeId: 2,
    leaveType: { id: 2, name: 'Sick Leave' },
    from: new Date('2025-07-10'),
    to: new Date('2025-07-12'),
    numberOfDays: 3,
    note: 'Flu symptoms'
  },
  {
    id: 3,
    employeeId: 3,
    leaveType: { id: 3, name: 'Sick Leave' },
    from: new Date('2025-08-15'),
    to: new Date('2025-09-15'),
    numberOfDays: 32,
    note: 'Childbirth recovery'
  },
  {
      id: 4,
      employeeId: 4,
      leaveType: { id: 1, name: 'Annual Leave' },
      from: new Date('2025-09-01'),
      to: new Date('2025-09-07'),
      numberOfDays: 7,
      note: 'Vacation trip'
    },
    {
      id: 5,
      employeeId: 5,
      leaveType: { id: 2, name: 'Sick Leave' },
      from: new Date('2025-09-15'),
      to: new Date('2025-09-17'),
      numberOfDays: 3,
      note: 'Cold and fever'
    },
    {
      id: 6,
      employeeId: 5,
      leaveType: { id: 3, name: 'Personal Leave' },
      from: new Date('2025-10-01'),
      to: new Date('2025-10-03'),
      numberOfDays: 3,
      note: 'Personal errands'
    }];

  getLeaves(): Leave[] {
  return this.leave;
  }

  addLeave(leave: Leave) {
    leave.id = this.leave.length + 1;
    this.leave.push(leave);
}
}


