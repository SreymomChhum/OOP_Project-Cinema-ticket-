import { Airport } from "../../../airport/Airport";

export class BaggageTage {
    constructor(
        private tagNumber: string,
        private departureAirport: Airport
        ) { }
}