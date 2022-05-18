const { Model, DataTypes } = require("sequelize");

const sequelize = require("../connection");

class Summary extends Model {}

Summary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "summary",
  }
);

module.exports = Summary;