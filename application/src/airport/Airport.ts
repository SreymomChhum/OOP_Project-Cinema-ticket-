import { AirportController } from "../person/airportStaff/AirportController";
import { Airline } from "./airlines/Airline";
import { Gate } from "./gate/Gate";

export class Airport {

    constructor(private name: string,
        private airportCode: string,
        private gates: Gate[],
        private airportController: AirportController,
        private airlines: Airline[]) { }

    //get full detail of passenger
    public getPassengerDetail = ( bookingReferenceNumber: string) => {
        for (let airline of this.airlines){
            for (let booking of airline.getBooking()){
                if (booking.getBookingReferenceNumber() === bookingReferenceNumber){
                    return booking;
                };
            };
        };
    };
}