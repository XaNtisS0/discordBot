const User = require("../models/user-model");

getUsers = async (req, res) => {
  await User.find({}, (err, Users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: Users });
  }).catch((err) => console.log(err));
};
