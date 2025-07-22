import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeavesComponent } from './leaves/leaves.component';
import { LeaveFormComponent } from './leaves/leave-form/leave-form.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseFormComponent } from './expenses/expense-form/expense-form.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseChartsComponent } from './expenses/expense-charts/expense-charts.component';
import { LeavesChartComponent } from './leaves/leaves-chart/leaves-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseChartsComponent,
    LeavesComponent,
    LeaveFormComponent,
    ExpensesComponent,
    ErrorComponent,
    ExpenseFormComponent,
    LeavesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
