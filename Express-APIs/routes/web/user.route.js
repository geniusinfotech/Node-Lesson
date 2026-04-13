const express = require("express");
const { body } = require("express-validator");
const userController = require("../../controllers/user.controller");

const router = express.Router();

// register user
// second validation -- use express validator package
router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Username must be 5 charcters long"),
    body("email").isEmail().withMessage("Enter Vaild Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("pasword must be 6 charcters long"),
  ],
  userController.registerUser,
);

module.exports = router;
