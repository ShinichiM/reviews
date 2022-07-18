const router = require("express").Router();
const { Summary } = require("../../db/models");

router.get("/", (req, res) => {
    Summary.findAll()
        .then((summaryData) => res.json(summaryData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

module.exports = router;