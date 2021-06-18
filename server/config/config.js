require('dotenv').config()

const configEnv = {
  MONGO_LINK: process.env.MONGO_LINK,
  PORT: 5000,
}
module.exports = configEnv
