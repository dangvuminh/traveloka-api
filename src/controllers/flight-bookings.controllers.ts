import { NextFunction, Request, Response } from "express";
import { FlightBookings, FlightByDate, Flights } from "../models/index";
import randomstring from "randomstring";
import sequelize from "../db/sequelize";
import { FlightInput } from "../types/flights.types";

const SEAT_TYPE_MAP: Record<SeatType, string> = {
  ECO: "numOfEco",
  BUS: "numOfBus",
  PRE: "numOfPre",
  FIRST: "numOfFirst",
};

const NUM_MAP_TO_DAY: Record<number, string> = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THURS",
  5: "FRI",
  6: "SAT",
};

export const createFlightBooking = async (
  req: Request<{}, {}, FlightBookingInput>,
  res: Response,
  next: NextFunction,
) => {
  return await sequelize.transaction(async (t) => {
    try {
      const {
        passport,
        userId,
        seatType,
        customerName,
        flightId,
        birthday,
        date,
      } = req.body;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const flightDate = new Date(date);

      if (new Date(date) < today) {
        throw new Error("Date must be today or in the future");
      }

      const flightDay = NUM_MAP_TO_DAY[flightDate.getDay()];

      const flight = await Flights.findOne({
        where: {
          id: flightId,
          flightSchedule: flightDay,
        },
      });
      console.log(flightDay);

      if (!flight) {
        throw new Error("Flight not found");
      }

      if (flight[SEAT_TYPE_MAP[seatType] as keyof FlightInput] === 0) {
        throw new Error("No available seat");
      }

      let flightByDate = await FlightByDate.findOne({
        where: {
          flightDate: date,
          flightId: flightId,
        },
        transaction: t,
        lock: true,
      });


      if (!flightByDate) {
        flightByDate = await FlightByDate.create(
          {
            flightId,
            flightDate: date,
            numOfEco:
              flight.numOfEco - (SEAT_TYPE_MAP[seatType] === "ECO" ? 1 : 0),
            numOfBus:
              flight.numOfBus - (SEAT_TYPE_MAP[seatType] === "BUS" ? 1 : 0),
            numOfFirst:
              flight.numOfFirst - (SEAT_TYPE_MAP[seatType] === "FIRST" ? 1 : 0),
            numOfPre:
              flight.numOfPre - (SEAT_TYPE_MAP[seatType] === "PRE" ? 1 : 0),
            status: "WAITING",
          },
          {
            transaction: t,
          },
        );
      } else {
        await flightByDate.update(
          {
            [SEAT_TYPE_MAP[seatType]]:
              Number(flight[SEAT_TYPE_MAP[seatType] as keyof FlightInput]) - 1,
          },
          { transaction: t },
        );
      }

      const bookingCode = randomstring.generate({
        length: 8,
        charset: "alphanumeric",
      });

      await FlightBookings.create(
        {
          bookingCode,
          passport,
          userId,
          seatType,
          customerName,
          flightId,
          birthday,
          status: "WAITING_PAYMENT",
          flightByDateId: flightByDate.id,
        },
        { transaction: t },
      );

      res.status(201).send("Flight is booked");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
};

export const getFlightBookings = async () =>
  //   req: Request<{}, {}, FlightBookingInput>,
  //   res: Response,
  {
    await FlightBookings.findAll();
  };
