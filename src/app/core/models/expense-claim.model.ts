export class ExpenseClaim {
    id?: number;
    date?: Date;
    description?: string;
    total?: number;
    status?: string;
    details?: ExpenseClaimDetail[];
    employeeId?: number;
}

export class ExpenseClaimDetail {
    id?: number;
    date?: Date;
    description?: string;
    type?: Type;
    total?: number;
}

export enum Type {
    hotel = 'Hotel',
    carRental = 'Car Rental',
    food = 'Food',
    ticket= 'Ticket',
}