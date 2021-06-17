const { buildSchema } = require("graphql");

const index = buildSchema(`
  type User {
    id: ID
    name: String
    password: String
  }
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
  type Query {
    getAllUsers:  
  }
`);

module.exports = index;
