const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const configEnv = require("./config/config");
const apiRouter = require("./api/apiRouter");
const graphqlRouter = require("./graphql/router");
const errorHandle = require("./api/errorHandle/index");

const init = require("./init");

const app = express();

app.use(
  cors({
    origin: configEnv.FRONT_HOST,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api", apiRouter);
app.use("/graphql", graphqlRouter);

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.use(errorHandle);

init(app);
