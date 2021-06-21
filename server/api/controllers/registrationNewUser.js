const createNewToken = require("../../util/createNewToken");
const User = require("../../db/models/user");
const hashPassword = require("../../util/hashPassword");

module.exports = async function registrationNewUser(req, res, next) {
  try {
    const user = new User({
      name: req.body.login,
      password: hashPassword(req.body.password),
    });

    await user.save();
    const token = createNewToken(user);

    res.cookie("auth_token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({ name: user.name, id: user._id });
  } catch (e) {
    next(e);
  }
};
