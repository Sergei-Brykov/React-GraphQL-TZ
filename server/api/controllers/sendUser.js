module.exports = function sendUser(req, res, next) {
  res.json({ id: req.user._id, name: req.user.name });
};
