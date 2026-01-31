import { Flights } from "./flights";
import { FlightBookings } from "./flight-bookings";
import { Users } from "./users";
import { Airlines } from "./airlines";
import { Cities } from "./cities";
import { Countries } from "./countries";
import { Airports } from "./airports";

//---------------------------FlightBookings associations---------------------------
FlightBookings.belongsTo(Flights, { foreignKey: "flightId" });
FlightBookings.belongsTo(Users, { foreignKey: "userId" });

//------------------------Users associations---------------------------
Users.hasMany(FlightBookings, { foreignKey: "userId" });

//---------------------------Airlines associations---------------------------
Airlines.hasMany(Flights, { foreignKey: "airlineId" });

//---------------------------Flights associations----------------------------
Flights.belongsTo(Airlines, { foreignKey: "airlineId" });
Flights.hasMany(FlightBookings, { foreignKey: "flightId" });


//---------------------------Airports associations----------------------------
Airports.belongsTo(Countries, {foreignKey: 'countryId'});
Airports.belongsTo(Cities, {foreignKey: 'cityId'});

export {
  FlightBookings,
  Flights,
  Airlines,
  Users,
  Cities,
  Countries,
  Airports,
};
