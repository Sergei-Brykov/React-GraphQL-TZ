const { buildSchema } = require("graphql");

const index = buildSchema(`
  type Worker {
    id: ID
    payment: Int
    bn: Int
  }
  input UserInput {
    id: ID
    name: String!
    password: String!
  }
  
`);

module.exports = index;
