import { Users } from "../models/index";
import { UserInput } from "../types/users.types";
import { Request, Response } from "express";

export const createUser = async (req: Request<{}, {}, UserInput>, res: Response) => {
  const { firstName, lastName, email, phone, gender }: UserInput = req.body;
  await Users.create({ firstName, lastName, email, phone, gender });
  res.status(200).send("User created");
};

export const getUsers = async (req: Request<{}, {}, UserInput>, res: Response) => {
  const users = await Users.findAll();
  res.status(200).json(users);
};


