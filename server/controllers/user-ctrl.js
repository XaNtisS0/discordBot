const User = require("../models/user-model");
const Server = require("../models/server-model");

// GET /api/users/
getUsers = async (req, res) => {
  await User.find({}, (error, users) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: `No users found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

// GET /api/users/:id
getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (error, user) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

// GET /api/users/server/:id
getUsersFromServer = async (req, res) => {
  await User.find({ server_id: req.params.id }, (error, users) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }

    if (!users) {
      return res.status(404).json({
        success: false,
        error: "There are no users assigned to this server",
      });
    }

    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

// POST /api/users
createUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a User",
    });
  }

  const { username, server_id, ranks } = body;

  const server = await Server.findOne(
    { _id: server_id },
    (err, foundServer) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!foundServer) {
        return res
          .status(404)
          .json({ success: false, error: `Server with this id not found` });
      }

      return foundServer;
    }
  ).catch((err) => console.log(err));

  const user = new User({ username, server_id: server, ranks });

  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: "User created",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "User not created due to error",
      });
    });
};

// PUT /api/users/:id
updateUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  await User.findOne({ _id: req.params.id }, async (error, user) => {
    if (error) {
      return res.status(404).json({
        error,
        message: "User not found",
      });
    }

    const { username, server_id, ranks } = body;

    if (username) {
      user.username = username;
    }
    if (server_id) {
      const server = await Server.findOne(
        { _id: server_id },
        (err, foundServer) => {
          if (err) {
            return res.status(400).json({ success: false, error: err });
          }

          if (!foundServer) {
            return res
              .status(404)
              .json({ success: false, error: `Server with this id not found` });
          }

          return foundServer;
        }
      ).catch((err) => console.log(err));
      user.server_id = server;
    }
    if (ranks && ranks.length) {
      user.ranks = ranks;
    }

    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: "User updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "User not updated",
        });
      });
  });
};

// DELETE /api/users/:id
deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (error, user) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

module.exports = {
  getUsers,
  getUserById,
  getUsersFromServer,
  createUser,
  updateUser,
  deleteUser,
};
