import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import sequelize from "../db/sequelize";

export class Airlines
  extends Model<InferAttributes<Airlines>, InferCreationAttributes<Airlines>>
{
  declare id: CreationOptional<string>;
  declare name: string;
  declare code: string;
  declare logo: CreationOptional<string>;  
}

Airlines.init(
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
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "airlines",
    timestamps: true,
  }
);
