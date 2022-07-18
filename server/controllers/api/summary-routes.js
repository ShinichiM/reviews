const router = require("express").Router();
const { Summary } = require("../../db/models");

router.get("/", (req, res) => {
  Summary.findAll()
    .then((summaryData) => res.json(summaryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  Summary.create({
    notes: req.body.notes,
    chapter: req.body.chapter,
  })
    .then((summaryData) => res.json(summaryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Summary.update(req.body, {
    where: {
      id: req.params.id,
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

router.delete("/:id", (req, res) => {
  Summary.destroy({ where: { id: req.params.id } })
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
