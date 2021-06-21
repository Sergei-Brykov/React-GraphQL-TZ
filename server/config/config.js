require("dotenv").config();

const configEnv = {
  MONGO_LINK: process.env.MONGO_LINK,
  PORT: 5000,
  NAME: "admin",
  PASSWORD: "123456",
  SECRET: "SECRET",
};
module.exports = configEnv;
