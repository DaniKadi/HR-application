import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/core/models/leaves.model';
import { LeavesService } from 'src/app/core/services/leaves.service';

@Component({
  selector: 'app-leaves-chart',
  templateUrl: './leaves-chart.component.html',
  styleUrls: ['./leaves-chart.component.scss']
})
export class LeavesChartComponent implements OnInit {
  leaves: Leave[] = [];
  leaveTypeTotals: { [type: string]: number } = {};

  constructor(private leavesService: LeavesService) {}

  ngOnInit() {
    this.leaves = this.leavesService.getLeaves();
    this.calculateTotals();
  }

  private calculateTotals() {
    this.leaveTypeTotals = {}; 
    this.leaves.forEach(leave => {
      const type = leave.leaveType?.name || 'Unknown';
      const days = leave.numberOfDays || 0;
      this.leaveTypeTotals[type] = (this.leaveTypeTotals[type] || 0) + days;
    });
  }

  get leaveTypeNames(): string[] {
    return Object.keys(this.leaveTypeTotals);
  }

  get totalLeaves(): number {
    return Object.values(this.leaveTypeTotals).reduce((sum, days) => sum + days, 0);
  }
}
