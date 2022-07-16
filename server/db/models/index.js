const Book = require("../models/Book");
const User = require("../models/User");
const Summary = require("../models/Summary");

User.hasMany(Book, {
  foreignKey: "book_id",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
});

Book.hasMany(Summary, {
  foreignKey: "summary_id",
});

Summary.belongsTo(Book, {
  foreignKey: "book_id",
});

module.exports = {
  Book,
  Summary,
  User,
};
