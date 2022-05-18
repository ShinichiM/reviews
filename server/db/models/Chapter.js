const { Model, DataTypes } = require("sequelize");

const sequelize = require("../connection");

class Chapter extends Model {}

Chapter.init(
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
    modelName: "chapter",
  }
);

module.exports = Chapter;