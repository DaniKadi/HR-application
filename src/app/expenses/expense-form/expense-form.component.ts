import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseClaim, ExpenseClaimDetail, Type } from '../../core/models/expense-claim.model';
import { Router } from '@angular/router';
import { ExpensesService } from 'src/app/core/services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {
 expenseForm!: FormGroup;
  types = Object.values(Type);

  constructor(
    private fb: FormBuilder,
    private expensesService: ExpensesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      date: [null, Validators.required],
      description: ['', Validators.required],
      status: ['Pending'],
      details: this.fb.array([])
    });

    this.addDetail();
  }

  get details(): FormArray {
    return this.expenseForm.get('details') as FormArray;
  }

  addDetail(): void {
    this.details.push(
      this.fb.group({
        date: [null, Validators.required],
        description: ['', Validators.required],
        type: [null, Validators.required],
        total: [null, [Validators.required, Validators.min(0)]]
      })
    );
  }

  removeDetail(index: number): void {
    this.details.removeAt(index);
  }

  calculateTotal(): number {
    return this.details.controls.reduce((sum, detail) => {
      const value = detail.get('total')?.value || 0;
      return sum + parseFloat(value);
    }, 0);
  }

  onSubmit(): void {
    if (this.expenseForm.valid) {
      const claim: ExpenseClaim = {
        ...this.expenseForm.value,
        total: this.calculateTotal(),
        details: this.expenseForm.value.details 
      };
      this.expensesService.addExpenseClaim(claim);
      this.router.navigate(['/expenses']);
      alert('Espense claim added')    }
  }
}
