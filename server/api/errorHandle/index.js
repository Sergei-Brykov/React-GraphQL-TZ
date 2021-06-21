module.exports = function errorHandle(err, req, res, next) {
  res.status(400).json({ error: err.message });
};
