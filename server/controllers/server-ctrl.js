const Server = require("../models/server-model");
const Ranks = require("../models/avaibleRanks-model");

// GET /api/servers/
getServers = async (req, res) => {
  await Server.find({}, (error, servers) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (!servers.length) {
      return res
        .status(404)
        .json({ success: false, error: "No servers found" });
    }
    return res.status(200).json({ success: true, data: servers });
  }).catch((error) => console.log(error));
};

// GET /api/servers/:id
getServerById = async (req, res) => {
  await Server.findOne({ _id: req.params.Id }, (error, server) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }

    if (!server) {
      return res
        .status(404)
        .json({ success: false, error: "Server not found" });
    }

    return res.status(200).json({ success: true, data: server });
  }).catch((error) => console.log(error));
};

// POST /api/servers/
createServer = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a server",
    });
  }

  const server = new Server(body);

  if (!server) {
    return res.status(400).json({ success: false, error });
  }

  server
    .save()
    .then(() => {
      ranks = Ranks.createRanksForServer(server._id);

      if (!ranks.success) {
        return res.status(400).json({ success: false, error: ranks });
      }

      return res.status(201).json({
        success: true,
        id: server._id,
        message: "Server created",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Server not created due to error",
      });
    });
};

// PUT api/servers/:id
updateServer = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  await Server.findOne({ _id: req.params.id }, (error, server) => {
    if (error) {
      return res.status(404).json({
        error,
        message: "Server not found",
      });
    }

    const { name, logging } = body;

    if (name) {
      server.name = name;
    }
    if (logging !== undefined) {
      server.logging = logging;
    }

    server
      .save()
      .then(() => {
        return res.status(200).json({
          status: true,
          id: server._id,
          message: "Server updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Server not updated",
        });
      });
  });
};

deleteServer = async (req, res) => {
  await Server.findOneAndDelete({ _id: req.params.id }, (error, server) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }

    if (!server) {
      return res
        .status(404)
        .json({ success: false, error: "Server not found" });
    }

    ranks = Ranks.deleteRanksForServer(server._id);

    if (!ranks.success) {
      return res.status(400).json({ success: false, error: ranks });
    }

    return res.status(200).json({ success: true, data: server });
  }).catch((error) => console.log(error));
};

module.exports = {
  getServers,
  getServerById,
  createServer,
  updateServer,
  deleteServer,
};
