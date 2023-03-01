import { DataTypes } from "sequelize";
import sequelize from "./../config/db.config";

const Show = sequelize.define('show', {
  _id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permalink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  network: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_thumbnail_path: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Show;