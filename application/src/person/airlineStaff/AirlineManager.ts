import { Employee } from "../Employee";
export class AirplineManager extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        employeeID: string,
        salary: number,
    ) {
        super(firstName, lastName, employeeID, salary)
    }
}