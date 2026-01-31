import { Request, Response } from "express";
import { Airlines } from "../models/index"
import { AirlineInput } from "../types/users.types";


export const getAirlines = async (req: Request<{}, {}, AirlineInput>, res: Response) => {
    const airlines = await Airlines.findAll();
    res.json(airlines);
}

export const createAirline = async (req: Request<{}, {}, AirlineInput>, res: Response) => {
    const {name, code, logo} = req.body;
    await Airlines.create({name, code, logo});
    res.status(200).send('Airline created');
}