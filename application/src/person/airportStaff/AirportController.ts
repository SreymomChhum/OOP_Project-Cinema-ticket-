import { Employee } from "../Employee";
export class AirportController extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        employeeID: string,
        salary: number,
    ) {
        super(firstName, lastName, employeeID, salary)
    }
}