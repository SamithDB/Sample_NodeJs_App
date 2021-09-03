const router = require("express").Router();
const customer = require("../controllers/customer.controller");

// Get Customer Form.
router.get("/", customer.get);

// Get Customer List
router.get("/home", customer.getList);

// Get One Customer
router.get("/:id", customer.getOne);

// Delete Customer
router.get("/delete/:id", customer.deleteOne);

// Add or Delete Customer
router.post("/", customer.addOrEdit);

module.exports = router;