const userModel = require("../models/user.model");

module.exports.createUser = async ({ username, email, password, role }) => {
  if (!username || !email || !password) {
    console.log("All Filed Are Required !!");
  }

  let user = userModel.create({ username, email, password, role });

  return user;
};
