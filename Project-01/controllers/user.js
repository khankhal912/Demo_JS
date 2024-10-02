const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.json(allUsers);
};

const getUserById = async (req, res) => {
  const user = User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
};

const createUser = async (req, res) => {
  const body = req.body;
  // console.log(body, "body");
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  console.log("result", result);
  return res.status(201).json({ status: "Success", id: result._id });
};

const upadteUserById = async (req, res) => {
  const upadteUser = await User.findByIdAndUpdate(req.params.id, req.body);
  return res.json(upadteUser);
};

const removeUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Deleted", id: req.params.id });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  upadteUserById,
  removeUserById,
};
