import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../db/sequelize";

export class FlightByDate extends Model<
  InferAttributes<FlightByDate>,
  InferCreationAttributes<FlightByDate>
> {
  declare id: CreationOptional<string>;
  declare flightId: ForeignKey<FlightByDate["id"]>;
  declare flightDate: Date;
  declare numOfEco: number;
  declare numOfBus: number;
  declare numOfPre: number;
  declare numOfFirst: number;
  declare status:
    | "WAITING"
    | "CHECKIN"
    | "BOARDING"
    | "DELAYED"
    | "RESCHEDULED"
    | "CANCELLED"
    | "COMPLETE";
}

FlightByDate.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    flightId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "flights",
        key: "id",
      },
    },
    flightDate: {
      type: DataTypes.DATE,
      allowNull: false,
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
    status: {
      type: DataTypes.ENUM(
        "WAITING",
        "CHECKIN",
        "BOARDING",
        "DELAYED",
        "RESCHEDULED",
        "CANCELLED",
        "COMPLETE",
      ),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "flight_by_date",
    timestamps: true,
  },
);
