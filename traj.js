// async function updateUser(id) {
//   const user = await User.update(id);
//   return user;
// }

// app.patch("/user/:id", async (req, res) => {
//   let { id } = request.params;
//   const user = await updateUsers();
//   res.json(user);
// });

// async function deleteUser() {
//   const user = await User.findByPk(id);
//   console.log(user);
//   return user.toJSON();
// }

// app.get("/user", function (req, res) {
//   User.findAll().then((user) => {
//     res.json(user);
//   });
// });

// app.delete("/user/:id", function (req, res) {
//   let { id } = req.params;
//   User.findByPk(id).then((user) => {
//     user.destroy().then(() => {
//       res.json(user);
//     });
//   });
// });

// Likes;
// app.post("/like", async (req, res) => {
//   const like = await createLike(req.body);
//   res.status(201).json(like);
// });
// app.get("/like/:tweetId", async (req, res) => {
//   const likes = await getLikes();
//   res.json(likes);
// });

// app.delete("/like/:tweetId", async (req, res) => {
//   let { id } = req.params;
//   const like = await Like.destroy({
//     where: { id },
//   });
//   console.log(like);
//   res.json({ msg: "like deleted" });
// });

// Follower;
// app.post("/follower", async (req, res) => {
//   const follower = await createFollower(req.body);
//   res.status(201).json(follower);
// });
// app.get("/follower", async (req, res) => {
//   const followers = await getFollowers();
//   res.json(followers);
// });

// app.delete("/follower/:id", async (req, res) => {
//   let { id } = req.params;
//   const follower = await Follower.destroy({
//     where: { id },
//   });
//   console.log(follower);
//   res.json({ msg: "Follower deleted" });
// });
