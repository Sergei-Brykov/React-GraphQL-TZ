require("dotenv").config();

const configEnv = {
  MONGO_LINK: process.env.MONGO_LINK,
  FRONT_HOST: process.env.FRONT_HOST,
  PORT: 5000,
  NAME: "admin",
  PASSWORD: "123456",
  SECRET: "SECRET",
};
module.exports = configEnv;
