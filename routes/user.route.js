const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.route("/random").get(userController.getUserRandom);
router.route("/all").get(userController.getAllUser);
router.route("/save").post(userController.saveUser);
router.route("/:id").patch(userController.updateUser);
router.route("/:id").delete(userController.deleteUser);
module.exports = router;
