const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.route("/").get(userController.getUser);

module.exports = router;