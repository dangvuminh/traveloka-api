import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../db/sequelize";
import { Cities, Countries } from "../models/index";

export class Airports extends Model<
  InferAttributes<Airports>,
  InferCreationAttributes<Airports>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare code: string;
  declare countryId: ForeignKey<Countries["id"]>;
  declare cityId: ForeignKey<Cities["id"]>;
}

Airports.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "countries",
        key: "id",
      },
    },
    cityId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "cities",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "airports",
    timestamps: true,
  },
);
