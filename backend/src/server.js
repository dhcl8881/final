import { GraphQLServer, PubSub } from "graphql-yoga";

import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";
import cardModel from "./models/schema.js";

const pubSub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    cardModel,
    pubSub,
  },
});

export default server;