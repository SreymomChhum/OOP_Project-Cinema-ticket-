// ======================================== Class import ==================
import { Airport } from "./airport/Airport";
import { Airline } from "./airport/airlines/Airline";
import { DateTime } from "./airport/dateTime/DateTime";
import { Gate } from "./airport/gate/Gate";
import { Trip } from "./airport/trip/Trip";
import { Airplane } from "./airport/trip/airplane/airplane";
import { BookingFlight } from "./airport/trip/flight/BookingFlight";
import { Flight } from "./airport/trip/flight/Flight";
import { Route } from "./airport/trip/route/Route";
import { FareClass } from "./airport/trip/seatLayout/FareClass";
import { SeatLayout } from "./airport/trip/seatLayout/SeatLayout";
import { Booking } from "./booking/Booking";
import { Baggage } from "./booking/baggage/Baggage";
import { BaggageTage } from "./booking/baggage/baggageTag/BaggageTag";
import { Mealtype } from "./booking/mealType/MealType";
import { Employee } from "./person/Employee";
import { AirlineChef } from "./person/airlineStaff/AirlineChef";
import { AirplineManager } from "./person/airlineStaff/AirlineManager";
import { AirlinePilot } from "./person/airlineStaff/AirlinePilot";
import { AirportController } from "./person/airportStaff/AirportController";
import { Passenger } from "./person/passenger/Passenger";

// ===================================/* create human */==============

//passenger
let passenger1 = new Passenger("Dara", "Py", "2AB", []);
let passenger2 = new Passenger("Nit", "Men", "3AB", []);
let passenger3 = new Passenger("Virak", "Yun", "4AB", []);
let passenger4 = new Passenger("Rothana", "Tep", "5AB", []);
let passenger5 = new Passenger("Chamnan", "Pet", "6AB", []);
let passenger6 = new Passenger("Sreymom", "May", "7AB", []);
let passenger7 = new Passenger("Visal", "Sok", "8AB", []);
let passenger8 = new Passenger("Chear", "Phearom", "9AB", []);

// Airport staff
let airportController1 = new AirportController("Sreyyoer", "Yeam", "01", 1200);
let airportController4 = new AirportController("la", "Say", "02", 1200);
let airportController5 = new AirportController("Soki", "Chouy", "03", 1200);
let airportController3 = new AirportController("Sea", "Net", "04", 1200);

// Airline staff
let airlinePilot1 = new AirlinePilot(`Vorak`, `Yun`, `A1`, 1200);
let airlinePilot2 = new AirlinePilot(`HasBin`, `Yi`, `A1`, 1200);
let airlinePilot3 = new AirlinePilot(`KobLu`, `Yo`, `A1`, 1200);
let airlinePilot4 = new AirlinePilot(`Kiko`, `Ye`, `A1`, 1200);
let airlinePilot5 = new AirlinePilot(`Kilo`, `Yy`, `A1`, 1200);

let airlineChef1 = new AirlineChef(`Zin`, `Too`, `A1`, 800);
let airlineChef2 = new AirlineChef(`Vy`, `Three`, `A1`, 800);

let airlineManager1 = new AirplineManager(`Sreyon`, `ki`, `A1`, 5000)
let airlineManager2 = new AirplineManager(`Sok`, `koch`, `A1`, 5000)
let airlineManager3 = new AirplineManager(`Vireak`, `Ream`, `A1`, 5000)

// =================== Airport data ==============================

// seat layouts
let seatLayout1 = new SeatLayout(`A1`, FareClass.Business);
let seatLayout2 = new SeatLayout(`A2`, FareClass.Business);
let seatLayout3 = new SeatLayout(`A3`, FareClass.Business);
let seatLayout4 = new SeatLayout(`A4`, FareClass.Business);
let seatLayout5 = new SeatLayout(`A5`, FareClass.Business);
let seatLayout6 = new SeatLayout(`B1`, FareClass.EconomyFlex);
let seatLayout7 = new SeatLayout(`B2`, FareClass.EconomyFlex);
let seatLayout8 = new SeatLayout(`B3`, FareClass.EconomyFlex);
let seatLayout9 = new SeatLayout(`B4`, FareClass.EconomyFlex);
let seatLayout10 = new SeatLayout(`B5`, FareClass.EconomyFlex);
let seatLayout11 = new SeatLayout(`C1`, FareClass.EconomyClassic);
let seatLayout12 = new SeatLayout(`C2`, FareClass.EconomyClassic);
let seatLayout13 = new SeatLayout(`C3`, FareClass.EconomyClassic);
let seatLayout14 = new SeatLayout(`C4`, FareClass.EconomyClassic);
let seatLayout15 = new SeatLayout(`C5`, FareClass.EconomyClassic);

// Airplane
let airplane1 = new Airplane(`N12345`, [seatLayout1,
    seatLayout2, seatLayout3, seatLayout4, seatLayout5,
    seatLayout6, seatLayout7, seatLayout8, seatLayout9,
    seatLayout10, seatLayout11, seatLayout12, seatLayout13,
    seatLayout14, seatLayout15]);

let airplane3 = new Airplane(`VH-ZZZ`, [seatLayout1,
    seatLayout2, seatLayout3, seatLayout4, seatLayout5,
    seatLayout6, seatLayout7, seatLayout8, seatLayout9,
    seatLayout10, seatLayout11, seatLayout12, seatLayout13,
    seatLayout14, seatLayout15]);

let airplane4 = new Airplane(`RP-C1029`, [seatLayout1,
    seatLayout2, seatLayout3, seatLayout4, seatLayout5,
    seatLayout6, seatLayout7, seatLayout8, seatLayout9,
    seatLayout10, seatLayout11, seatLayout12, seatLayout13,
    seatLayout14, seatLayout15]);

// Airline 
let airline1 = new Airline(`K6`, `Cambodia Angkor Air`, airlineManager1, [airlinePilot1, airlinePilot2, airlineChef1], []);
let airline2 = new Airline(`BA`, `British Airways`, airlineManager2, [airlinePilot1, airlinePilot2, airlineChef1], []);
let airline3 = new Airline(`U2`, `EasyJet`, airlineManager3, [airlinePilot1, airlinePilot2, airlineChef1], []);

// Gate 
let gate1 = new Gate(`1A`);
let gate2 = new Gate(`2A`);
let gate3 = new Gate(`1B`);
let gate4 = new Gate(`2B`);
let gate5 = new Gate(`1C`);
let gate6 = new Gate(`2C`);
let gate7 = new Gate(`1D`);
let gate8 = new Gate(`2D`);

// Airports
let airport1 = new Airport(`Phnom Penh International Airport`, `PNH`, [gate1, gate2, gate3, gate4], airportController1, [airline1, airline2, airline3]);
let airport2 = new Airport(`Don Mueang International Airport`, `DMK`, [gate5, gate6, gate7, gate8], airportController4, [airline1, airline2, airline3]);
let airport3 = new Airport(`Changi Airport Singapore`, `SIN`, [gate1, gate2, gate3, gate4], airportController3, [airline1, airline2, airline3]);

// date times
let dateTime1 = new DateTime(10, `May`, 2023, `10AM`);
let dateTime2 = new DateTime(11, `May`, 2023, `10AM`);
let dateTime3 = new DateTime(12, `May`, 2023, `10AM`);
let dateTime4 = new DateTime(13, `May`, 2023, `10AM`);
let dateTime5 = new DateTime(14, `May`, 2023, `10AM`);
let dateTime6 = new DateTime(15, `May`, 2023, `10AM`);

// routes
let route1 = new Route(dateTime1, dateTime3, airport2, airport1);
let route2 = new Route(dateTime2, dateTime4, airport3, airport1);
let route3 = new Route(dateTime6, dateTime5, airport1, airport3);
let route4 = new Route(dateTime1, dateTime3, airport1, airport2);

// Flights
let flight1 = new Flight("CX123", airlinePilot1, airline1, route1, gate1, airplane1);
let flight2 = new Flight("SQ456", airlinePilot2, airline2, route2, gate2, airplane3);
let flight3 = new Flight("AA789", airlinePilot2, airline3, route3, gate3, airplane4);
let flight4 = new Flight("EK101", airlinePilot4, airline3, route4, gate4, airplane3);

// =========================================== Booking =====================

// booking flight
let bookingFlight1 = new BookingFlight(flight1, seatLayout1);
let bookingFlight2 = new BookingFlight(flight2, seatLayout2);
let bookingFlight3 = new BookingFlight(flight3, seatLayout10);
let bookingFlight4 = new BookingFlight(flight4, seatLayout12);
let bookingFlight5 = new BookingFlight(flight2, seatLayout5);

// trips
let trip1 = new Trip([bookingFlight1, bookingFlight2, bookingFlight3]);
let trip2 = new Trip([bookingFlight3, bookingFlight4, bookingFlight5]);
let trip3 = new Trip([bookingFlight1, bookingFlight2, bookingFlight3]);
let trip4 = new Trip([bookingFlight3, bookingFlight4, bookingFlight5]);

//baggage tags
let baggageTag1 = new BaggageTage(`SIA4567890123`, airport1);
let baggageTag2 = new BaggageTage(`SIA4567890124`, airport1);
let baggageTag3 = new BaggageTage(`SIA4567890125`, airport1);
let baggageTag4 = new BaggageTage(`SIA4567890126`, airport1);
let baggageTag5 = new BaggageTage(`SIA4567890127`, airport1);
let baggageTag6 = new BaggageTage(`SIA4567890128`, airport1);
let baggageTag7 = new BaggageTage(`SIA4567890129`, airport1);
let baggageTag8 = new BaggageTage(`SIA45678901210`, airport1);
let baggageTag9 = new BaggageTage(`SIA45678901211`, airport1);
let baggageTag10 = new BaggageTage(`SIA45678901212`, airport1);

// baggage 
let baggage1 = new Baggage(`5678901234`, 50, baggageTag1);
let baggage2 = new Baggage(`5678901235`, 50, baggageTag2);
let baggage3 = new Baggage(`5678901236`, 50, baggageTag3);
let baggage4 = new Baggage(`5678901237`, 50, baggageTag4);
let baggage5 = new Baggage(`5678901238`, 50, baggageTag5);
let baggage6 = new Baggage(`5678901239`, 50, baggageTag6);
let baggage7 = new Baggage(`56789012310`, 50, baggageTag7);
let baggage8 = new Baggage(`56789012311`, 50, baggageTag8);
let baggage9 = new Baggage(`56789012312`, 50, baggageTag9);
let baggage10 = new Baggage(`56789012313`, 50, baggageTag10);

// bookings 
let booking1 = new Booking(`AB456C`, passenger1, [baggage1, baggage2], Mealtype.Halal, trip1, trip4);
let booking2 = new Booking(`AB456D`, passenger2, [baggage3, baggage4], Mealtype.DairyFree, trip1, trip4);
let booking3 = new Booking(`AB456E`, passenger3, [baggage6, baggage5], Mealtype.Kosher, trip3);
let booking4 = new Booking(`AB456F`, passenger4, [baggage7, baggage8], Mealtype.Vegan, trip4);
let booking5 = new Booking(`AB456G`, passenger5, [baggage9, baggage10], Mealtype.Vegetarian, trip2);

// add booking to passengers
passenger1.addBooking(booking1);
passenger2.addBooking(booking2);
passenger3.addBooking(booking3);
passenger4.addBooking(booking4);
passenger5.addBooking(booking5);

// add booking to ariline 
airline1.addBooking(booking1, booking2);
airline2.addBooking(booking4, booking3);
airline3.addBooking(booking5);
/*
============================================================================================
=============================================== Test =======================================
============================================================================================
*/

/* 
User story1 ===> As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
Reference Number (flights, bags, customer information…)
*/

console.log(airport1.getPassengerDetail('AB456C'));

/* 
User story2 ===> As an airline manager, I want to know for a given flight, how many passengers have return 
tickets.
*/

console.log(airline1.getPassengerReturnTickets(flight3));

/* 
User story3 ===> As an airline pilot, I want to know, for a given date, how many flights I have to join.
*/

console.log(airline1.getPilotFlight(airlinePilot1,dateTime1));

/* 
As a passenger, I want to know, for a given date and flight number what is the gate number I need to go to
 */

console.log(passenger1.getGateNumber(`CX123`,dateTime1));


/* 
As a passenger, I want to know which gate my plane is waiting at.
 */
console.log(airline1.getTotalSalaryOfEmployees())