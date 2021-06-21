const mongoose = require("mongoose");
const configEnv = require("./config/config");
const User = require("./db/models/user");
const hashPassword = require("./util/hashPassword");

async function init(app) {
  try {
    await mongoose.connect(configEnv.MONGO_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    await createDefaultUser();

    app.listen(configEnv.PORT, (err) => {
      err
        ? console.log(err)
        : console.log("Server start in port " + configEnv.PORT);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

async function createDefaultUser() {
  const name = configEnv.NAME;
  const password = hashPassword(configEnv.PASSWORD);

  if (!(await User.findOne({ name, password }))) {
    const admin = new User({ name, password });
    await admin.save();
  }
}

module.exports = init;
