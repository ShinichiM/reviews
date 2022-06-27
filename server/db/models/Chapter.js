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
    title: {
      type: DataTypes.STRING,
      defaultValue: "n/a",
      allowNull: false,
    },
    page_number: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "book",
        key: "id",
      },
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
