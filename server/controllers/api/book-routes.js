const router = require("express").Router();
const { Summary, User, Chapter } = require("../../db/models");
const Book = require("../../db/models/Book");

router.get("/", (req, res) => {
  Book.findAll().then((bookData) => {
    res.json(bookData).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });
});

router.post("/", (req, res) => {
  // if(req.sesison)
  Book.create({
    title: req.body.title,
    author: req.body.author,
  })
    .then((bookData) => res.json(bookData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Book.destroy({ where: { id: req.params.id } }).then((bookData) =>
    res.json(bookData).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    })
  );
});

module.exports = router;
