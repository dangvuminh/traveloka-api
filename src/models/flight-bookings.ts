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
import { Users } from "./users";

export class FlightBookings extends Model<
  InferAttributes<FlightBookings>,
  InferCreationAttributes<FlightBookings>
> {
  declare id: CreationOptional<string>;
  declare bookingCode: string;
  declare userId: string;
  declare flightId: ForeignKey<Flights["id"]>;
  declare seatType: "ECO" | "PRE" | "BUS" | "FIRST";
  declare customerName: string;
  declare passport: CreationOptional<string>;
  declare birthday: Date;
}

FlightBookings.belongsTo(Flights, { foreignKey: "flightId" });
FlightBookings.belongsTo(Users, { foreignKey: "userId" });

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
    },
    flightId: {
      allowNull: false,
      type: DataTypes.UUID,
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
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: "flight_bookings",
    timestamps: true,
  }
);
