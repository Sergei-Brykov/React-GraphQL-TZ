const { Router } = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");
const validateToken = require("../api/middleware/validateToken");
const root = require("./root");

const router = Router();

router.use(
  validateToken,
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema,
  })
);

module.exports = router;
