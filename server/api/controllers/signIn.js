const createNewToken = require("../../util/createNewToken");

module.exports = function signIn(req, res, next) {
  try {
    if (!req.user) {
      next(new Error("This user does not exist"));
    }

    const token = createNewToken(req.user);

    res.cookie("auth_token", token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({ name: req.user.name, id: req.user._id });
  } catch (e) {
    next(e);
  }
};
