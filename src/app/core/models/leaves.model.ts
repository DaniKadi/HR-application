export class Leave{
    id?: number;
    leaveType?: LeaveType;
    from?: Date;
    to?: Date;
    numberOfDays?: number;
    note?: string;
    employeeId?: number;
}

export class LeaveType{
    id?: number;
    name?: string;
}