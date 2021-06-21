const jwt = require("jsonwebtoken");

const configEnv = require("../../config/config");
const User = require("../../db/models/user");

module.exports = async function validateUser(req, res, next) {
  try {
    if (!req.cookies.auth_token) {
      console.log(1);
      next(new Error("Permission denied!"));
    }

    const candidate = jwt.verify(req.cookies.auth_token, configEnv.SECRET);

    req.user = await User.findOne({ _id: candidate._id, name: candidate.name });

    if (!req.user) {
      console.log(2);
      next(new Error("Permission denied"));
    }

    next();
  } catch (e) {
    console.log(e);
    next(e);
  }
};
