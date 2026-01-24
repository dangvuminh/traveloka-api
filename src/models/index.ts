import { Flights } from "./flights";
import { FlightBookings } from "./flight-bookings";
import { Users } from "./users";
import { Airlines } from "./airlines";

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



export { FlightBookings, Flights, Airlines, Users };
