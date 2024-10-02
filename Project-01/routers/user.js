const express = require("express");
const router = express.router();
const {
  getAllUsers,
  getUserById,
  createUser,
  upadteUserById,
  removeUserById,
} = require("../controllers/user");

//REST API
router.route("/").get(getAllUsers).post(createUser);
router
  .route("/:id")
  .get(getUserById)
  .patch(upadteUserById)
  .delete(removeUserById);

// router.get("/users", async (req, res) => {
//   const allUsers = await User.find({});
//   const html = `
//       <ul>
//           ${allUsers
//             .map(
//               (user) =>
//                 `<li>${user.firstName} ${user.lastName} - ${user.email}</li>`
//             )
//             .join("")}
//       </ul>
//       `;
//   res.send(html);
// });

// router.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// router.patch("api/users/:id", (req, res) => {
//   // TODO: Update user with given id
//   return res.json({ status: "Pending" });
// });

// router.delete("api/users/:id", (req, res) => {
//   // TODO: Delete user with given id
//   return res.json({ status: "Pending" });
// });

module.exports = router;
