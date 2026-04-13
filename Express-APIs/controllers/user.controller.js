const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");

module.exports.registerUser = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { username, email, password } = req.body;

  // check user is already register or available database
  let isExist = await userModel.findOne({ email: email });

  if (isExist) {
    return res.status(400).json({ message: "user is already register" });
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    username,
    email,
    password: hashPassword,
  });

  let token = await user.generateAuthToken();

  res.status(200).json({ token, user });
};
