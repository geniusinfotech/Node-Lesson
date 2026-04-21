const userModel = require("../models/user.model");
const adminService = require("../services/admin.service");

module.exports.Alluser = async (req, res) => {
  try {
    const users = await adminService.getAllUser();

    return res.status(200).json({ msg: "Fetch All Users", users });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const deleted_user = await adminService.deleteUser(req.params.id);

    if (!deleted_user) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json({ message: "user Deleted Sucessfully", deleted_user});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
