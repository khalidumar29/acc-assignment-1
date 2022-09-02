const data = require("../public/user.json");

module.exports.getUser = (req, res) => {
  const randomUser = data[Math.round(Math.random() * (data.length - 1))];
  res.json(randomUser);
};
