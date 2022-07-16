const router = require("express").Router();
const bookRoutes = require("./book-routes");
const userRoutes = require("./user-routes");

router.use("/book", bookRoutes);
router.use("/user", userRoutes);

module.exports = router;
