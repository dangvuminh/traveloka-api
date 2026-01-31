import { Request, Response } from "express";
import { CountryInput } from "../types/countries.types";
import { Countries } from "../models/index";

export const createCountry = async (
  req: Request<{}, {}, CountryInput>,
  res: Response,
) => {
  const { name } = req.body;
  await Countries.create({ name });
  res.status(200).send('Country created')
};


export const getCountries = async (
  req: Request<{}, {}, CountryInput>,
  res: Response,
) => {
  const countries = await Countries.findAll();
  res.status(200).json(countries);
};
