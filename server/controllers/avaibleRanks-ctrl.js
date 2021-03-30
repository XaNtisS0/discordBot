const AvailableRanks = require("../models/availableRanks-model");

// GET /api/ranks/:id
getRanksByServerId = async (req, res) => {
  await AvailableRanks.find({ server_id: req.params.id }, (error, ranks) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({ success: true, data: ranks });
  }).catch((error) => console.log(error));
};

// PUT /api/ranks/:id
updateRanksForServer = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  await AvailableRanks.findOne(
    { server_id: req.params.id },
    (error, server) => {
      if (error) {
        return res.status(404).json({
          error,
          message: "Server not found",
        });
      }

      const { name, server_id } = body;

      if (name) {
        server.name = name;
      }
      if (server_id) {
        server.server_id = server_id;
      }

      server
        .save()
        .then(() => {
          return res.status(200).json({
            status: true,
            id: server._id,
            message: "Ranks updated",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Ranks not updated",
          });
        });
    }
  );
};

// backend only create ranks method
createRanks = async (server_id) => {
  const server = new AvailableRanks({ server_id, names: [] });

  if (!server) {
    return res.status(400).json({ success: false, error });
  }

  server
    .save()
    .then(() => {
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
