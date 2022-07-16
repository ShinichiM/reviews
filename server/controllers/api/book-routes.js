const router = require("express").Router();
const { Summary, User, Chapter, Book } = require("../../db/models");
// const Book = require("../../db/models/Book");

router.get("/", (req, res) => {
  Book.findAll()
    .then((bookData) => res.json(bookData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
  Book.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((bookData) => {
      if (bookData) {
        res.json(bookData);
      } else {
        res.status(404).json({ message: "No book found with this ID."});
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
})

router.delete("/:id", (req, res) => {
  Book.destroy({ where: { id: req.params.id } })
    .then((bookData) => res.json(bookData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
