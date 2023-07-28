import { Person } from "./Person";

export class Employee extends Person {

    constructor(
        firstName: string,
        lastName: string,
        protected employeeID: string,
        protected salary: number) {
        super(firstName, lastName);
    }

    public getSalary= ()=> this.salary;
}



