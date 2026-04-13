const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");

module.exports.registerUser = async (req, res, next) => {
  const erorr = validationResult(req);

  if (!erorr.isEmpty()) {
    return res.status(400).json({ erorr: erorr.array() });
  }

  const { username, email, password, role } = req.body;

  const exitsingUser = await userModel.findOne({ email: email });
  if (exitsingUser) {
    return res.status(400).json({ message: "User already register." });
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    username,
    email,
    password: hashPassword,
    role,
  });

  const token = await user.generateToken();

  res.status(200).json({ user, token });
};

module.exports.loginUser = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  console.log(user);

  if (!user) {
    return res.status(404).json({ message: "User not Found" });
  }

  let compare = await user.comparePassword(password);

  if (!compare) {
    return res.status(401).json({ message: "Wrong Password" });
  }

  const token = await user.generateToken();

  console.log(token);

  res.status(200).json({ token, user });
};

module.exports.profileUser = async (req, res) => {
  res.status(200).json(req.user);
};
