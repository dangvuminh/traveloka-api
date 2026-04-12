import { Request, Response } from "express";
import { Airports } from "../models/index";
import { AirportInput } from "../types/airports.types";

export const getAirports = async (
  req: Request<{}, {}, AirportInput>,
  res: Response,
) => {
  const airports = await Airports.findAll();
  res.json(airports);
};

export const createAirport = async (
  req: Request<{}, {}, AirportInput>,
  res: Response,
) => {
  const { name, code, cityId, countryId } = req.body;
  await Airports.create({ name, code, cityId, countryId });
  res.status(200).send("Airport created");
};
