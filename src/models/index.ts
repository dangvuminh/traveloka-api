import { Flights } from "./flights";
import { FlightBookings } from "./flight-bookings";
import { Users } from "./users";
import { Airlines } from "./airlines";
import { Cities } from "./cities";
import { Countries } from "./countries";
import { Airports } from "./airports";
import { FlightByDate } from "./flight-by-date";

//---------------------------FlightBookings associations---------------------------
FlightBookings.belongsTo(Flights, { foreignKey: "flightId" });
FlightBookings.belongsTo(Users, { foreignKey: "userId" });
FlightBookings.belongsTo(FlightByDate, { foreignKey: "flightByDateId" });

//---------------------------FlightByDate associations-------------------------
FlightByDate.belongsTo(Flights, {foreignKey: 'flightId'})

//------------------------Users associations---------------------------
Users.hasMany(FlightBookings, { foreignKey: "userId" });

//---------------------------Airports associations----------------------------
Airports.belongsTo(Countries, { foreignKey: "countryId" });
Airports.belongsTo(Cities, { foreignKey: "cityId" });
Airports.hasMany(Flights, {
  foreignKey: "flyFrom",
  as: "departingFlights",
});

Airports.hasMany(Flights, {
  foreignKey: "flyTo",
  as: "arrivingFlights",
});

//---------------------------Airlines associations---------------------------
Airlines.hasMany(Flights, { foreignKey: "airlineId" });

//---------------------------Flights associations----------------------------
Flights.belongsTo(Airlines, { foreignKey: "airlineId" });
Flights.hasMany(FlightBookings, { foreignKey: "flightId" });
Flights.hasMany(FlightByDate, { foreignKey: "flightId" });
Flights.belongsTo(Flights, { foreignKey: "routeId", as: "transitFlight" });
Flights.belongsTo(Airports, { foreignKey: "flyFrom", as: "departureAirport" });
Flights.belongsTo(Airports, { foreignKey: "flyTo", as: "arrivalAirport" });

export {
  FlightBookings,
  Flights,
  Airlines,
  Users,
  Cities,
  Countries,
  Airports,
  FlightByDate,
};
