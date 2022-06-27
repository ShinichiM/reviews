const seedBooks = require("./book-seeds");
const seedChapters = require("./chapter-seeds");
const seedSummaries = require("./summary-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----------- DATABASE SYNCED -------- \n");

  await seedUsers();
  console.log("\n----------- USERS SEEDED -------- \n");

  await seedBooks();
  console.log("\n----------- BOOKS SEEDED -------- \n");

  await seedChapters();
  console.log("\n----------- CHAPTERS SEEDED -------- \n");

  await seedSummaries();
  console.log("\n----------- SUMMARIES SEEDED -------- \n");

  process.exit(0);
};

seedAll();