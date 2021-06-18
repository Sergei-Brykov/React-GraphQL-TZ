const express = require("express");
const cors = require("cors");

const apiRouter = require('./api/apiRouter');
const graphqlRouter = require('./graphql/router');
const init = require('./init')

const app = express();

app.use(cors());
app.use('/api', apiRouter)
app.use('/graphql', graphqlRouter)

init(app)





