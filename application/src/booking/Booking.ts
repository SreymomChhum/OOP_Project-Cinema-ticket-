import { DateTime } from "../airport/dateTime/DateTime";
import { Gate } from "../airport/gate/Gate";
import { Trip } from "../airport/trip/Trip";
import { Flight } from "../airport/trip/flight/Flight";
import { AirlinePilot } from "../person/airlineStaff/AirlinePilot";
import { Passenger } from "../person/passenger/Passenger";
import { Baggage } from "./baggage/Baggage";
import { Mealtype } from "./mealType/MealType";

export class Booking {
    private checkedIn: boolean = false
    constructor(
        private bookingReferenceNumber: string,
        private passenger: Passenger,
        private baggages: Baggage[],
        private mealType: Mealtype,
        private departureTrip: Trip,
        private returnTrip?: Trip,
    ) { }

    // get bookingReferenceNumber
    public getBookingReferenceNumber = (): string => this.bookingReferenceNumber;

    // is return
    public isReturn = (): boolean => this.returnTrip !== undefined;

    //get passenger
    public getPassenger = (): Passenger => this.passenger;

    //get trip
    public getDepartureTrip = (): Trip => this.departureTrip;

    //get Flight number 
    public getNumberOfFlights = (pilot: AirlinePilot, date: DateTime): number => {
        let numberOfFlight: number = 0;
        for (let bookingFlight of this.departureTrip.getBookingFlights()) {
            if (bookingFlight.getFlight().getRoute().getDepartureDateTime().isEqual(date) && bookingFlight.getFlight().getPilot() === pilot) {
                numberOfFlight += 1
            }
        }
        return numberOfFlight;
    };

    // get gate number of flight
    public getFlightGate = (flightNumber: string, date: DateTime): Gate | undefined => {
        for (let bookingFlight of this.departureTrip.getBookingFlights()) {
            if (bookingFlight.getFlight().getRoute().getDepartureDateTime().isEqual(date) && bookingFlight.getFlight().getflightNumber() === flightNumber) {
                return bookingFlight.getFlight().getGate();
            };
        };
        return undefined;
    };
}