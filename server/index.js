const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
const root = {
  hello: () => {
    return "Hello world!";
  },
};
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema,
  })
);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("Server start in port " + PORT);
});
