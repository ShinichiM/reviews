const router = require("express").Router();
const bookRoutes = require("./book-routes");

router.use("/book", bookRoutes);

module.exports = router;
