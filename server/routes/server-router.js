const express = require("express");

const ServerCtrl = require("../controllers/server-ctrl");

const router = express.Router();

//get all Servers
router.get("/", ServerCtrl.getServers);
//get single Server
router.get("/:id", ServerCtrl.getServerById);
//post Server
router.post("/", ServerCtrl.createServer);
//update Server
router.put("/:id", ServerCtrl.updateServer);
//detele Server
router.delete("/:id", ServerCtrl.deleteServer);

module.exports = router;
