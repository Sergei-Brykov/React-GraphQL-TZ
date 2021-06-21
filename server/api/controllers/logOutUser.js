module.exports = function (req, res, next) {
  res.clearCookie("auth_token");
  res.end();
};
