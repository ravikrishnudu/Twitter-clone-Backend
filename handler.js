const { User, Tweet, Like, Follower } = require("./Model");
// User
async function createUser(data) {
  const user = await User.create(data);
  console.log(user);
  return user.toJSON();
}

async function getUsers() {
  const users = await User.findAll();
  return users;
}
// Tweets
async function createTweet(data) {
  const tweet = await Tweet.create(data);
  return tweet.toJSON();
}

async function getTweets(username, id) {
  let query, user;
  if (username) {
    user = await User.findOne({ where: { username } });
    query = { where: { userId: user.id } };
  } else if (id) {
    query = { where: { id } };
  } else {
    query = {};
  }
  const tweets = await Tweet.findAll(query);
  console.log(tweets);
  return tweets.map((tweet) => tweet.toJSON());
}

// async function getTweets() {
//   const tweets = await Tweet.findone({ where: { username: "ravi" } });
//   return tweets;
// }

//Likes
async function createLike(data) {
  const like = await Like.create(data);
  return like.toJSON();
}

async function getLikes() {
  const likes = await Like.findAll();
  return likes;
}
// Follower
async function createFollower(data) {
  const follower = await Follower.create(data);
  return follower.toJSON();
}

async function getFollowers() {
  const followers = await Follower.findAll();
  return followers;
}

module.exports = {
  createUser,
  getUsers,
  createTweet,
  getTweets,
  createLike,
  getLikes,
  createFollower,
  getFollowers,
};
