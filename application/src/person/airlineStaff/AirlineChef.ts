import { Employee } from "../Employee";

export class AirlineChef extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        employeeID: string,
        salary: number,
    ) {
        super(firstName, lastName, employeeID, salary)
    }
}