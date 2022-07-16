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

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
        console.log("++++++++++++++++++", userData)
      if (userData[0]) {
        res.json(userData[0]);
      } else {
        console.log("No user found with this ID.");
        res.status(404).json({ message: "No user found with this ID." });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
  })
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// router.delete();

module.exports = router;
