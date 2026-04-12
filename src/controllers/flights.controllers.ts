import { Request, Response } from "express";
import { Airlines, Flights } from "../models/index";
import { FlightInput } from "../types/flights.types";
import sequelize from "../db/sequelize";

export const createFlight = async (
  req: Request<{}, {}, FlightInput>,
  res: Response,
) => {
  return await sequelize.transaction(async () => {
    try {
      const { ...para } = req.body;

      const airline = await Airlines.findByPk(para.airlineId);
      const countFlight = await Flights.count({
        where: {
          airlineId: para.airlineId,
        },
      });
      const payload: FlightInput = {
        ...para,
        numOfEco: para.numOfEco || 0,
        numOfBus: para.numOfBus || 0,
        numOfPre: para.numOfPre || 0,
        numOfFirst: para.numOfFirst || 0,
        flightCode: airline?.code + `${countFlight + 1}`,
      };
      try {
        await Flights.create({ ...payload });
        res.send("Flight created");
      } catch (error) {
        res.status(400).json(error);
      }
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });
};

export const getFlights = async (
  req: Request<{}, {}, FlightInput>,
  res: Response,
) => {
  const flights = await Flights.findAll();
  res.status(200).json(flights);
};
