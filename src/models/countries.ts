import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import sequelize from "../db/sequelize";

export class Countries
  extends Model<InferAttributes<Countries>, InferCreationAttributes<Countries>>
{
  declare id: CreationOptional<string>;
  declare name: string;
}

Countries.init(
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
    }
  },
  {
    sequelize,
    tableName: "countries",
    timestamps: true,
  }
);
