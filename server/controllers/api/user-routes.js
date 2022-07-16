const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/", (req, res) => {
  User.findAll()
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.put();

// router.post();

// router.delete();

module.exports = router;
