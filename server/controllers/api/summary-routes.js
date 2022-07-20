const router = require("express").Router();
const { Book, Summary } = require("../../db/models");

router.get("/:bookId", (req, res) => {
  Summary.findAll({
    where: {
      book_id: req.params.bookId,
    },
    attributes: ["id", "notes", "chapter", "book_id"],
    include: [
      {
        model: Book,
        attributes: ["id", "title", "author"],
      },
    ],
  })
    .then((summaryData) => {
      res.json(summaryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/:bookId", (req, res) => {
  Summary.create({
    notes: req.body.notes,
    chapter: req.body.chapter,
    book_id: req.params.bookId,
  })
    // .then((summarydata) =>
    //   Book.update(
    //     { book_id: req.params.bookId },
    //     {
    //       where: {
    //         id: req.params.bookId,
    //       },
    //     }
    //   )
    // )
    .then((summaryData) => res.json(summaryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:bookId/:summaryId", (req, res) => {
  Summary.update(req.body, {
    where: {
      id: req.params.summaryId,
      book_id: req.params.bookId,
    },
  })
    .then((summaryData) => {
      if (summaryData[0]) {
        res.json(summaryData);
      } else {
        res
          .status(404)
          .json({ message: "Could not find Summary with this ID." });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:bookId/:summaryId", (req, res) => {
  Summary.destroy({
    where: { id: req.params.summaryId, book_id: req.params.bookId },
  })
    .then((summaryData) => {
      if (summaryData) {
        res.json(summaryData);
      } else {
        res
          .status(404)
          .json({ message: "Could not find summary with this ID." });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
