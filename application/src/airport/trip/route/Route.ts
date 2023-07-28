import { Airport } from "../../Airport";
import { DateTime } from "../../dateTime/DateTime";

export class Route {
    constructor(private departureDateTime: DateTime,
        private arrivalDateTime: DateTime,
        private arrivalAirport: Airport,
        private departureAirport: Airport) { }

    //get departureDateTime
    public getDepartureDateTime = (): DateTime => this.departureDateTime;
}