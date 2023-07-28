
import { DateTime } from "../../dateTime/DateTime";
import { SeatLayout } from "../seatLayout/SeatLayout";
import { Flight } from "./Flight";

export class BookingFlight {
    constructor(
        private flight: Flight,
        private seatLayout: SeatLayout) { }

    //get flight 
    public getFlight = (): Flight => this.flight;

    public getGateNumber = (flight: Flight, date: DateTime) => {
        if (this.getFlight() == flight && date.isEqual(date)) {
            return flight.getGate()
        }
    }
}


