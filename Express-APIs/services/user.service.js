const userModel = require("../models/user.model");

// third validation --> check all filed are not blank

module.exports.createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error("All Filed are Required !!");
  }

  const user = await userModel.create({ username, email, password });

  return user;
};

// next create a controller for register user
