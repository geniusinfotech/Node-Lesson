const express = require("express");
const router = express.Router();
const middleware = require("../../../middlewares/admin.middleware");
const usermiddleware = require("../../../middlewares/user.middleware");
const adminController = require("../../../controllers/admin.controller");
const { body } = require("express-validator");

// show all users
// login user --> check user is Admin? --> show all users
router.get(
  "/all/user",
  usermiddleware.authUser,
  middleware.authAdmin,
  adminController.AllUser,
);

// Delete User
router.delete(
  "/user/:id",
  usermiddleware.authUser,
  middleware.authAdmin,
  adminController.deleteUser,
);

// Manager Creation
router.post(
  "/manager/create",
  [
    body("username")
      .isLength({ min: 4 })
      .withMessage("username must be 4 characters long"),
    body("email").isEmail().withMessage("Enter Vaild Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  usermiddleware.authUser,
  middleware.authAdmin,
  adminController.registerManager,
);

module.exports = router;
