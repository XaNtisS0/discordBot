const express = require("express");

const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

//get all users
router.get("/", UserCtrl.getUsers);
//get single user
router.get("/:id", UserCtrl.getUserById);
//post user
router.post("/", UserCtrl.createUser);
//update user
router.put("/:id", UserCtrl.updateUser);
//detele user
router.delete("/:id", UserCtrl.deleteUser);

module.exports = router;
