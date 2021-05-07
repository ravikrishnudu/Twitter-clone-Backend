if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const {
  createUser,
  getUsers,
  createTweet,
  getTweets,
  createLike,
  getLikes,
  // createFollower,
  // getFollowers,
} = require("./handler");
const { User, Tweet, Like } = require("./Model");

const PORT = process.env.PORT;
//middleware
const app = express();

app.use(express.json());
app.use(cors());

//user

app.post("/user", async (req, res) => {
  // res.json({ msg: "hello" });
  // console.log(req.body);
  const user = await createUser(req.body);
  console.log(user);
  res.status(201).json(user);
});

app.get("/user", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.patch("/user/:id", function (req, res) {
  let { id } = req.params;
  User.update(id).then((user) => {
    res.json(user);
  });
});

app.delete("/user/:id", async (req, res) => {
  let { id } = req.params;
  const user = await User.destroy({
    where: { id },
  });
  console.log(user);
  res.json({ msg: "user deleted" });
});

// Tweets
app.post("/tweet", async (req, res) => {
  const tweet = await createTweet(req.body);
  res.status(201).json(tweet);
});

app.get("/tweets", async (req, res) => {
  const { username, id } = req.query;
  const tweets = await getTweets(username, id);
  res.json(tweets);
});

// app.get("/tweet/:id", async (req, res) => {
//   let { id } = req.params;
//   const tweet = await Tweet.findOne({
//     where: { id },
//   });
//   console.log(tweet);
//   res.json(tweet);
// });

app.delete("/tweet/:id", async (req, res) => {
  let { id } = req.params;
  const tweet = await Tweet.destroy({
    where: { id },
  });
  console.log(tweet);
  res.json({ msg: "tweet deleted" });
});

// Likes;
app.post("/like", async (req, res) => {
  const like = await createLike(req.body);
  res.status(201).json(like);
});
app.get("/like/:tweetId", async (req, res) => {
  const likes = await getLikes();
  res.json(likes);
});

app.delete("/like/:tweetId", async (req, res) => {
  let { tweetId } = req.params;
  const like = await Like.destroy({
    where: { tweetId },
  });
  console.log(like);
  res.json({ msg: "like deleted" });
});

//follower
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

app.listen(PORT, () => {
  console.log(`server stated on ${PORT}`);
});
