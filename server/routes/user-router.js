const express = require("express");

const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

//get all users
router.get("/:serverId/users");
//get single user
router.get("/:serverId/users/:userId");
//post user on server
router.post("/:serverId/users");
//update user on server
router.put("/:serverId/users/:userId");
//detele user on server
router.delete("/:serverId/users/:userId");
