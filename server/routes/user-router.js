const express = require("express");

const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

//get all users
router.get("/", UserCtrl.getUsers);
//get single user
router.get("/:userId", UserCtrl.getUserById);
//post user on server
router.post("/", UserCtrl.createUser);
//update user on server
router.put("/:userId", UserCtrl.updateUser);
//detele user on server
router.delete("/:userId", UserCtrl.deleteUser);

module.exports = router;
