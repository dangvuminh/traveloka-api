import userRoutes from "./users.routes";
import airlineRoutes from "./airlines.routes";
import countriesRoutes from "./countries.routes";
import citiesRoutes from "./cities.routes";
import airportsRoutes from "./airports.routes";
import flightsRoutes from "./flights.routes";
import flightBookingsRoutes from "./flight-bookings.routes";
import { Express } from "express";

export default function registerAppRoutes(app: Express) {
  app.use("/api/users", userRoutes);
  app.use("/api/airlines", airlineRoutes);
  app.use("/api/countries", countriesRoutes);
  app.use("/api/cities", citiesRoutes);
  app.use("/api/airports", airportsRoutes);
  app.use("/api/flights", flightsRoutes);
  app.use("/api/flight-bookings", flightBookingsRoutes);
}
