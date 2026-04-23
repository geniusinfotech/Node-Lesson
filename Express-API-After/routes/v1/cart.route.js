const express = require("express");
const router = express.Router();
const userMiddleware = require("../../middleware/auth.middleware")


// add product into cart
router.post("/add", userMiddleware.authUser)

// get cart 

// remove product from cart




module.exports = router;
