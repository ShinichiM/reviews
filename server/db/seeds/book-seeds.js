const { Book } = require("../models");

const bookData = [
    {
        id: 1,
        title: "book one",
        author: "author one",
        chapter_id: 1
    }
];

const seedBooks = () => Book.bulkCreate(bookData);
module.exports = seedBooks;