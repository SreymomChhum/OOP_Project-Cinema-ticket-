import { SeatLayout } from "../seatLayout/SeatLayout";

export class Airplane {
    constructor(private RegistrationNumber: string,
        private seatLayout: SeatLayout[]) { }
}