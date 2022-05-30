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
    notes: {
       type: DataTypes.STRING,
       allowNull: false
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id'
      }
    }
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