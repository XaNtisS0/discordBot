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
