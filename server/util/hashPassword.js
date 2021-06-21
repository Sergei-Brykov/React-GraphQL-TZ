const crypto = require("crypto");

function hashPassword(password) {
  return crypto.createHash("md5").update(String(password)).digest("hex");
}

module.exports = hashPassword;
