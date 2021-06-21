module.exports = function validateUserData(req, res, next) {
  const { login, password } = req.body;

  if (!IsValidLogin(login) || !IsValidPassword(password)) {
    console.log("throw");
    next(new Error("You input an incorrect username or password"));
  }

  next();
};

function IsValidLogin(login) {
  return !(typeof login !== "string" || login.length <= 2);
}

function IsValidPassword(password) {
  return !(typeof password !== "string" || password.length < 6);
}
