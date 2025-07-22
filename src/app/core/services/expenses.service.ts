import { Injectable } from '@angular/core';
import { ExpenseClaim, Type } from '../models/expense-claim.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expense: ExpenseClaim[] = [
    {
    id: 1,
    date: new Date('2025-07-01'),
    description: 'Business trip to Dubai',
    total: 850,
    status: 'Approved',
    employeeId: 101,
    details: [
      {
        id: 1,
        date: new Date('2025-07-01'),
        description: 'Hotel stay - 1 night',
        type: Type.hotel,
        total: 300
      },
      {
        id: 2,
        date: new Date('2025-07-02'),
        description: 'Car rental for meetings',
        type: Type.carRental,
        total: 200
      },
      {
        id: 3,
        date: new Date('2025-07-01'),
        description: 'Dinner at client location',
        type: Type.food,
        total: 150
      },
      {
        id: 4,
        date: new Date('2025-07-01'),
        description: 'Flight ticket to Dubai',
        type: Type.ticket,
        total: 200
      }
    ]
  },
  {
    id: 2,
    date: new Date('2025-07-10'),
    description: 'Conference in Beirut',
    total: 450,
    status: 'Pending',
    employeeId: 102,
    details: [
      {
        id: 5,
        date: new Date('2025-07-10'),
        description: 'Lunch with partner',
        type: Type.food,
        total: 50
      },
      {
        id: 6,
        date: new Date('2025-07-10'),
        description: 'Taxi from hotel to venue',
        type: Type.carRental,
        total: 100
      },
      {
        id: 7,
        date: new Date('2025-07-10'),
        description: 'Conference ticket',
        type: Type.ticket,
        total: 300
      }
    ]
  }
  ];

  getExpenseClaims(): ExpenseClaim[] {
    return this.expense;
  }
  addExpenseClaim(claim: ExpenseClaim) {
    claim.id = this.expense.length + 1;
    this.expense.push(claim);
  }
  getEmployeeIds(): number[] {
  return [...new Set(this.expense.map(c => c.employeeId).filter((id): id is number => id !== undefined))];
}


getClaimsByEmployeeId(employeeId: number): ExpenseClaim[] {
  return this.expense.filter(claim => claim.employeeId === employeeId);
}
}
