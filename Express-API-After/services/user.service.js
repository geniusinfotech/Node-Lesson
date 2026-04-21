const userModel = require("../models/user.model");

// database change --> user service
// create user
module.exports.createUser = async ({ username, email, password, role }) => {
  if (!username || !email || !password) {
    console.log("All Filed Are Required !!");
  }

  let user = userModel.create({ username, email, password, role });

  return user;
};

// update user
module.exports.updateUser = async ({userId, username, email}) => {

  console.log(userId)
  // console.log(username)

  const updateUser = await userModel.findOneAndUpdate(
    {_id: userId},
    { username, email },
    { new: true },
  );

  if (!updateUser) {
    throw new Error("User Data Not Found");
  }

  return updateUser;
};
