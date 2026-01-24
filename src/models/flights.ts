import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../db/sequelize";
import { Airlines } from "./airlines";
import { FlightBookings } from "./flight-bookings";

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
}

// Flights.belongsTo(Airlines, { foreignKey: "airlineId" });
// Flights.hasMany(FlightBookings, { foreignKey: "flightId" });

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
  },
  {
    sequelize,
    tableName: "airlines",
    timestamps: true,
  }
);
