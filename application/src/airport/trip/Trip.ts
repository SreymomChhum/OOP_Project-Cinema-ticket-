import { BookingFlight } from "./flight/BookingFlight";

export class Trip {
    constructor(private bookingFlights: BookingFlight[]) { }

    //get booking flight
    public getBookingFlights = ():BookingFlight[] => this.bookingFlights;
}