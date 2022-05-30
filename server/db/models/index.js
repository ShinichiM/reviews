const { Book, Chapter, Summary, User } = require("../models");

User.hasMany(Summary, {
  foreignKey: "user_id",
});
Summary.belongsTo(User, {
  foreignKey: "user_id",
});

Summary.belongsToMany(User, {
  through: Book,
  as: "",
});
