const router = require("express").Router();
const bookRoutes = require("./book-routes");
const userRoutes = require("./user-routes");
const summaryRoutes = require("./summary-routes");

router.use("/book", bookRoutes);
router.use("/book", summaryRoutes);
router.use("/user", userRoutes);
// router.use("/summary", summaryRoutes);

module.exports = router;
