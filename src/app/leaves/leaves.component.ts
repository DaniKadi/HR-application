import { Component } from '@angular/core';
import { Leave } from '../core/models/leaves.model';
import { LeavesService } from '../core/services/leaves.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent {
  allLeaves: Leave[] = [];
  leaves: Leave[] = [];
  fromDate: string = '';
  toDate: string = '';
  employeeId: number | null = null;

  constructor(private leavesService: LeavesService) {}

  ngOnInit(): void {
    this.allLeaves = this.leavesService.getLeaves();
    this.leaves = [...this.allLeaves];
  }

  filterLeaves(): void {
    this.leaves = this.allLeaves.filter(leave => {
      const from = this.fromDate ? new Date(this.fromDate) : null;
      const to = this.toDate ? new Date(this.toDate) : null;

      const leaveFrom = new Date(leave.from!);
      const leaveTo = new Date(leave.to!);

      const matchesEmployee = this.employeeId ? leave.employeeId === this.employeeId : true;
      const matchesDate =
        (!from || leaveTo >= from) &&
        (!to || leaveFrom <= to);

      return matchesEmployee && matchesDate;
    });
  }

  clearFilters(): void {
    this.fromDate = '';
    this.toDate = '';
    this.employeeId = null;
    this.leaves = [...this.allLeaves];
  }
}
