const { Router } = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");
const validateToken = require("../api/middleware/validateToken");
const Worker = require("../db/models/worker");

const router = Router();

const root = {
  getAllWorkers: async ({ sort, skip }) => {
    try {
      return await Worker.find({}, null, { limit: 10, skip: skip * 10 }).sort(
        sort
      );
    } catch (e) {
      //@TODO add error logic
      console.log(e);
    }
  },
  createWorker: async ({ input }) => {
    try {
      const worker = new Worker(input);
      await worker.save();

      return worker;
    } catch (e) {
      //@TODO add error logic
      console.log(e);
    }
  },
  updateWorker: async ({ input }) => {
    try {
      return await Worker.findOneAndUpdate({ _id: input.id }, input);
    } catch (e) {
      //@TODO add error logic
      console.log(e);
    }
  },
  deleteWorker: async ({ input }) => {
    try {
      await Worker.findByIdAndDelete(input.id);
      return input;
    } catch (e) {
      //@TODO add error logic
      console.log(e);
    }
  },
};

router.use(
  validateToken,
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema,
  })
);

module.exports = router;
