const mongoose = require('mongoose')
const configEnv = require('./config/config')
const User = require('./db/models/user')

async function init(app) {
  try {
    await mongoose.connect(configEnv.MONGO_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    if(!await User.findOne({
      name: 'admin',
      password: 'admin'
    })) {
      const user = new User({
        name: 'admin',
        password: 'admin'
      })

      await user.save()
    }

    app.listen(configEnv.PORT, (err) => {
      err ? console.log(err) : console.log("Server start in port " + configEnv.PORT);
    });
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

module.exports = init