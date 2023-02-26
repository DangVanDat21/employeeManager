export class WorkingDate {
    id: number = 0;
    employeeId: number = 0;
    date: Date = new Date();
    hour: number = 0;

    public getId(): number { return this.id; }
    public setId(id: number) { this.id = id; }

    public getEmployeeId(): number { return this.employeeId }
    public setEmployeeId(employeeId: number) { this.employeeId = employeeId; }

    public getDate(): Date { return this.date }
    public setDate(date: Date) { this.date = date; }

    public getHour(): number { return this.hour; }
    public setHour(hour: number) { this.hour = hour; }
}