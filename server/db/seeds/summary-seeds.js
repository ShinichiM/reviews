const { Summary } = require("../models");

const summarySeeds = [
    {
        id: 1,
        notes: "this book sucks",
        book_id: 1,
        user_id: 1
    }
]

const seedSummaries = () => Summary.bulkCreate(summarySeeds);
module.exports = seedSummaries;