const userModel = require("../models/user.model");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// when create a service -- when you want to change into database

// thrid validation --> cheak all field are not blank

module.exports.createUser = async ({ username, email, password, role }) => {
  if (!username || !email || !password) {
    throw new Error("All Filed Are Required");
  }

  const user = await userModel.create({ username, email, password, role });

  return user;
};

// update data
module.exports.updateUser = async ({ userId, username, email }) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { username, email },
    { new: true },
  );

  if (!updatedUser) {
    throw new Error("user not found");
  }

  return updatedUser;
};

// forget password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_EMAIL,
    pass: process.env.NODE_PASSWORD,
  },
});
