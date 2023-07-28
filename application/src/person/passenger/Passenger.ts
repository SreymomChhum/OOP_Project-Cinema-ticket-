import { DateTime } from "../../airport/dateTime/DateTime";
import { Gate } from "../../airport/gate/Gate";
import { Booking } from "../../booking/Booking";
import { Person } from "../Person"

export class Passenger extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private frequentFlyerMembershipNumber: string,
        private bookingItems: Booking[],
    ) {
        super(firstName, lastName);
    }

    public addBooking = (booking: Booking): void => { this.bookingItems.push(booking) };

    // get gate
    public getGateNumber = (flightNumber: string, date: DateTime): Gate | undefined => {
        for (let booking of this.bookingItems) {
            let gateNumber: Gate | undefined = booking.getFlightGate(flightNumber, date);
            if (gateNumber !== undefined) {
                return gateNumber;
            }
        };
        return undefined;
    }
}