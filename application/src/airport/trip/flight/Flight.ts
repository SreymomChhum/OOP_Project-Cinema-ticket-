import { AirlinePilot } from "../../../person/airlineStaff/AirlinePilot";
import { Airline } from "../../airlines/Airline";
import { DateTime } from "../../dateTime/DateTime";
import { Gate } from "../../gate/Gate";
import { Airplane } from "../airplane/airplane";
import { Route } from "../route/Route";

export class Flight {
    constructor(private flightNumber: string,
        private airLinePilot: AirlinePilot,
        private airline: Airline,
        private route: Route,
        private gate: Gate,
        private airplane: Airplane) { }


    public getflightNumber = (): string => this.flightNumber;

    public getGate = (): Gate => this.gate;


    //get route 
    public getRoute = (): Route => this.route;

    //get Pilot
    public getPilot = (): AirlinePilot => this.airLinePilot;
}