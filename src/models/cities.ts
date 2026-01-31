import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../db/sequelize";
import { Countries } from "../models/index";

export class Cities extends Model<
  InferAttributes<Cities>,
  InferCreationAttributes<Cities>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare code: string;
  declare countryId: ForeignKey<Countries["id"]>;
}

Cities.init(
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
  },
  {
    sequelize,
    tableName: "cities",
    timestamps: true,
  },
);
