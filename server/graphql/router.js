const { Router } = require('express');
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/graphql");

const router = Router()

const root = {
  hello: () => {
    return "Hello world!";
  },
};

router.use(
  '',
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema,
  })
);



module.exports = router