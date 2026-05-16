import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../db/sequelize";
import { Flights } from "./flights";
import { FlightByDate } from "./flight-by-date";

export class FlightBookings extends Model<
  InferAttributes<FlightBookings>,
  InferCreationAttributes<FlightBookings>
> {
  declare id: CreationOptional<string>;
  declare bookingCode: CreationOptional<string>;
  declare userId: string;
  declare flightId: ForeignKey<Flights["id"]>;
  declare seatType: "ECO" | "PRE" | "BUS" | "FIRST";
  declare customerName: string;
  declare passport: CreationOptional<string | null>;
  declare birthday: CreationOptional<Date | null>;
  declare flightByDateId: ForeignKey<FlightByDate["id"]>;
  declare status:
    | "WAITING_PAYMENT"
    | "WAITING_CONFIRMED"
    | "ISSUED"
    | "CANCELLED"
    | "REFUNDING"
    | "RESCHEDULED"
    | "COMPLETE";
}

FlightBookings.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    bookingCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
    },
    flightId: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: "flights",
        key: "id",
      },
    },
    flightByDateId: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: "flight_by_date",
        key: "id",
      },
    },
    seatType: {
      allowNull: false,
      type: DataTypes.ENUM("ECO", "PRE", "BUS", "FIRST"),
    },
    customerName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    passport: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    birthday: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(
        "WAITING_PAYMENT",
        "WAITING_CONFIRMED",
        "ISSUED",
        "CANCELLED",
        "REFUNDING",
        "RESCHEDULED",
        "COMPLETE",
      ),
    },
  },
  {
    sequelize,
    tableName: "flight_bookings",
    timestamps: true,
  },
);
