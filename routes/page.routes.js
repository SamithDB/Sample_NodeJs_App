const router = require("express").Router();
const page = require("../controllers/page.controller");
const customer = require("../controllers/customer.controller");

// Get Home Page
router.get("/", customer.getList);

// Get Help Page
router.get("/help", page.getHelp);

// Get About Page
router.get("/about", page.getAbout);

module.exports = router;