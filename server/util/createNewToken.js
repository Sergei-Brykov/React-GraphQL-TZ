const jwt = require("jsonwebtoken");
const configEnv = require("../config/config");

const createNewToken = (user) => {
  const data = {
    _id: user._id,
    name: user.name,
  };

  return jwt.sign(data, configEnv.SECRET);
};

module.exports = createNewToken;
