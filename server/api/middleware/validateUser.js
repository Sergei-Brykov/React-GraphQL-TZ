const User = require("../../db/models/user");
const hashPassword = require("../../util/hashPassword");

module.exports = async function validateUser(req, res, next) {
  try {
    const password = hashPassword(req.body.password);

    req.user = await User.findOne({
      name: req.body.login,
      password: password,
    });

    if (!req.user) {
      next(new Error("This user does not exist"));
    }

    next();
  } catch (e) {
    next(e);
  }
};
