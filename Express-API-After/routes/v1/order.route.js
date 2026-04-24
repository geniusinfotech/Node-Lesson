const express = require("express");

const router = express.Router();
const userMiddleware = require("../../middleware/auth.middleware");
const orderController = require("../../controllers/order.controller");

// create order
router.post("/add", userMiddleware.authUser, orderController.PlaceOrder);

module.exports = router;
