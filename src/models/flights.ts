import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../db/sequelize";
import { Airlines, Airports } from "../models/index";

export class Flights extends Model<
  InferAttributes<Flights>,
  InferCreationAttributes<Flights>
> {
  declare id: CreationOptional<string>;
  declare airlineId: ForeignKey<Airlines["id"]>;
  declare flightSchedule:
    | "MON"
    | "TUE"
    | "WED"
    | "THURS"
    | "FRI"
    | "SAT"
    | "SUN";
  declare flightTime: Date;
  declare numOfEco: number;
  declare numOfBus: number;
  declare numOfPre: number;
  declare numOfFirst: number;
  declare flyFrom: ForeignKey<Airports["id"]>;
  declare flyTo: ForeignKey<Airports["id"]>;
  declare fromTime: string;
  declare toTime: string;
  declare routeId: CreationOptional<ForeignKey<Flights["id"]> | null>;
  declare order: CreationOptional<number | null>;
}

Flights.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    airlineId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    flightSchedule: {
      type: DataTypes.ENUM("MON", "TUE", "WED", "THURS", "FRI", "SAT", "SUN"),
      allowNull: false,
    },
    flightTime: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    numOfEco: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numOfBus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numOfPre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numOfFirst: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    flyFrom: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    flyTo: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    fromTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    toTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    routeId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "flights",
        key: "id",
      },
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "airlines",
    timestamps: true,
  },
);
