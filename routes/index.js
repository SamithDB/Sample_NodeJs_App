const router = require("express").Router();
require('../models/customer.model');

// All routes import here.
router.use("/customer", require("./customer.routes"));
router.use("/", require("./page.routes"));

module.exports = router;