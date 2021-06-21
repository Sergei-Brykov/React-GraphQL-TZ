const { buildSchema } = require("graphql");

const index = buildSchema(`
  type Worker {
    id: ID
    payment: Int
    birthday: String
    fullName: String
    position: String
  }
  
  input WorkerInput {
    id: ID
    fullName: String!
    payment: Int!
    birthday: String!
    position: String!
  }
  type Query {
    getAllWorkers(sort: String, skip: Int): [Worker]
  }
  
  type Mutation {
    createWorker(input: WorkerInput): Worker
    updateWorker(input: WorkerInput): Worker
    deleteWorker(input: WorkerInput): Worker
  }
  
  
`);

module.exports = index;
