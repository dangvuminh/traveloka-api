import { Request, Response } from "express";
import { Cities } from "../models/index";
import { CityInput } from "../types/cities.types";

export const createCity = async (
  req: Request<{}, {}, CityInput>,
  res: Response,
) => {
  const { name, code, countryId } = req.body;
  await Cities.create({ name, code, countryId });
  res.status(200).send("City created");
};

export const getCities = async (
  req: Request<{}, {}, CityInput>,
  res: Response,
) => {
  const cities = await Cities.findAll();
  res.status(200).json(cities);
};
