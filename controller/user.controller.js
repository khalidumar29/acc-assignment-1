const data = require("../public/user.json");

module.exports.getUserRandom = (req, res) => {
  const randomUser = data[Math.round(Math.random() * (data.length - 1))];
  res.json(randomUser);
};

module.exports.getAllUser = (req, res) => {
  const limit = req.query.limit || 10;
  const limitedData = data.slice(0, limit);
  res.json(limitedData);
};

module.exports.saveUser = (req, res) => {
  const newUser = req.body;
  if (
    newUser.name &&
    newUser.id &&
    newUser.gender &&
    newUser.address &&
    newUser.contact &&
    newUser.photoUrl
  ) {
    data.push(newUser);
    res.json(newUser);
  } else {
    res.send(`plese follow the description down below:
    {"id": 2,"name": "Derrick J. Phoenix","gender": "male","contact": "229-326-7620","address": "2872 Private Lane Albany, GA 31707","photoUrl": "https://i.ibb.co/DRNbMbf/download-1.jpg"}
    `);
  }
};

module.exports.updateUser = (req, res) => {
  const id = req.params.id;
  const numId = parseInt(id);
  const updateUser = req.body;
  const findUser = data.find((user) => user.id === Number(id));

  if (findUser && numId === Number(id)) {
    findUser.name = updateUser.name;

    findUser.gender = updateUser.gender;

    findUser.address = updateUser.address;

    findUser.contact = updateUser.contact;

    findUser.photoUrl = updateUser.photoUrl;
    res.status(200).json(findUser);
  } else if (numId !== Number) {
    res.status(404).json({
      message: "plese send number as id ",
    });
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
};

module.exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const numId = parseInt(id);
  const findUser = data.find((user) => user.id === Number(id));
  console.log(findUser);
  if (findUser && numId === Number(id)) {
    const index = data.indexOf(findUser);
    data.splice(index, 1);
    res.status(200).json({
      message: "user deleted",
      user: findUser,
    });
  } else if (numId !== Number(id)) {
    res.status(404).json({
      message: "plese send number as id ",
    });
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
};
