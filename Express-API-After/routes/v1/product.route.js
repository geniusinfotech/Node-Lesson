const express = require("express");
const router = express.Router()
const userMiddleware = require("../../middleware/auth.middleware")
const adminMiddleware = require("../../middleware/admin.middleware")


// create product
router.post("/add", userMiddleware.authUser, adminMiddleware.authAdmin, )

// update product


// read single product



// read all product


// delete single product


module.exports = router;
