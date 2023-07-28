import { BaggageTage } from "./baggageTag/BaggageTag";

export class Baggage {
    constructor(
        private baggageId: string,
        private weight: number,
        private baggageTages:BaggageTage,
    ) { }
}