import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { LeavesChartComponent } from './leaves-chart/leaves-chart.component';

const routes: Routes = [
  { path: '', component: LeavesComponent },
  {path: 'leave-form', component: LeaveFormComponent },
  {path: 'leaves-chart', component: LeavesChartComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
