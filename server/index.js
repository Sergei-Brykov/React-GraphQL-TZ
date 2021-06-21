const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const apiRouter = require("./api/apiRouter");
const graphqlRouter = require("./graphql/router");
const errorHandle = require("./api/errorHandle/index");

const init = require("./init");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api", apiRouter);
app.use("/graphql", graphqlRouter);

app.use(errorHandle);

init(app);
