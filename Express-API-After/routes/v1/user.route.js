const express = require("express");
const { body } = require("express-validator");
const userController = require("../../controllers/user.controller");
const middleware = require("../../middleware/auth.middleware");

const router = express.Router();

// app.post("/signup", (req, res)=>{
// res.send("user signup")
//})

// backend data validation
router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 3 })
      .withMessage("Username must be 3 charcters long"),
    body("email").isEmail().withMessage("Enter Vaild Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must be 6 Charcters Long"),
  ],
  userController.registerUser,
);

// login user
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter Vaild Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must be 6 Charcters Long"),
  ],
  userController.loginUser,
);

// user profile
router.get("/profile", middleware.authUser, userController.profileUser);

module.exports = router;
