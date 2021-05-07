const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL);

const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

const Tweet = sequelize.define(
  "tweet",
  {
    text: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

User.hasMany(Tweet);
Tweet.belongsTo(User);

const Like = sequelize.define("like", {}, { timestamps: false });

User.hasMany(Tweet);
Tweet.belongsTo(User);
Tweet.hasMany(Like);
Like.belongsTo(Tweet);
Like.belongsTo(User);

const Follower = sequelize.define("follower", {}, { timestamps: false });

User.hasMany(Follower, { foreignKey: "userId" });
Follower.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Follower, { foreignKey: "followerId" });
Follower.belongsTo(User, { foreignKey: "followerId" });

async function connection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connection();

module.exports = { sequelize, User, Tweet, Like, Follower };
